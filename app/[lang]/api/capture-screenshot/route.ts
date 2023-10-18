// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import cache from "memory-cache";
import type { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
type Json = {
  message: string;
};

export async function GET(
  req: NextRequest,
  res: NextApiResponse<Json | Buffer>
) {
  const url = req.nextUrl.searchParams.get("url");
  const apiToken = process.env.BLESS_TOKEN;
  const urlRequest = "https://chrome.browserless.io/screenshot";
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
  const requestData = {
    url,
    // timeout: 45000,
    gotoOptions: {
      // timeout: 30000,
      waitUntil: "load",
    },
    options: {
      fullPage: false,
      type: "png",
      // timeout: 45000,
      // quality: 75,
      encoding: "base64",
    },
    viewport: {
      height: 1080,
      width: 1920,
    },
  };

  const { data, status } = await axios.post<any>(urlRequest, requestData, {
    headers: {
      "Cache-Control": "no-cache",
      "Content-Type": "application/json",
    },
    params: {
      token: apiToken,
    },
    // responseType: "arraybuffer",
    // timeout: 45000,
  });

  if (status === 200) {
    const imageBuffer = Buffer.from(data, "base64");
    const base64Image = imageBuffer.toString("base64");
    cache.put(url, base64Image, 30000);
    const responser = new NextResponse(base64Image);
    responser.headers.set("Content-Type", "image/png"); // Defina o tipo de conteúdo apropriado
    return responser;
  }

  // const resp = new NextResponse(data).blob();
  // resp.headers.set("content-type", "image/jpeg");
  // return resp;
}
