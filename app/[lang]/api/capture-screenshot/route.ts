import cache from "memory-cache";
import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");

  if (!url) {
    return new NextResponse('Missing "url" parameter', { status: 400 });
  }
  // Verifique se a imagem já está em cache
  const cachedImage = cache.get(url);

  if (cachedImage) {
    // Se a imagem estiver em cache, retorne-a diretamente
    const response = new NextResponse(cachedImage);
    response.headers.set("content-type", "image/png");
    return response;
  }

  const browser = await puppeteer.launch({
    headless: "new",
    ignoreHTTPSErrors: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  await page.setRequestInterception(true);

  const rejectRequestPattern = [
    "googlesyndication.com",
    "/*.doubleclick.net",
    "/*.amazon-adsystem.com",
    "/*.adnxs.com",
    "/*.onesignal.com",
    "/*gcma_includes/*",
  ];
  const blockList: any = [];
  page.on("request", (request) => {
    if (rejectRequestPattern.find((pattern) => request.url().match(pattern))) {
      blockList.push(request.url());
      request.abort();
    } else request.continue();
  });
  try {
    await page.goto(url, { timeout: 45000 });
    await page.setViewport({ width: 1440, height: 900 });
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36"
    );
    const screenshot = await page.screenshot({
      optimizeForSpeed: true,
      type: "png",
    });
    // console.log(screenshot);
    // Create a Blob from the screenshot Buffer.
    // const blob = new Blob([screenshot], { type: "image/png" });
    // Armazene a imagem capturada em cache com um tempo de expiração
    cache.put(url, screenshot, 300000); // Cache válido por 5 minutos (300000 milissegundos)
    const response = new NextResponse(screenshot);
    response.headers.set("content-type", "image/png");
    // console.log(
    //   `Blocked ${blockList.length} requests with urls: ${JSON.stringify(
    //     blockList
    //   )}`
    // );
    return response;

    // Send the response.
  } catch (error: any) {
    console.error(error);
    return new Response(
      JSON.stringify({
        error: "An error occurred while taking the screenshot",
        message: String(error),
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  } finally {
    await browser.close();
    // return Response.json(
    //   {
    //     error: "An error occurred while taking the screenshot",
    //   },
    //   { status: 500 }
    // );
  }
}
