import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    const apiToken = process.env.BLESS_TOKEN;
    const url = "https://chrome.browserless.io/screenshot";

    const requestData = {
      url: req.nextUrl.searchParams.get("url"),
      options: {
        fullPage: true,
        type: "jpeg",
        quality: 75,
      },
    };

    const response = await axios.post(url, requestData, {
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
      },
      params: {
        token: apiToken,
      },
      // responseType: "arraybuffer",
    });

    if (response.status === 200) {
      const imageBuffer = Buffer.from(response.data, "binary");
      const responser = new NextResponse(imageBuffer);
      res.headers.set("Content-Type", "image/jpeg"); // Defina o tipo de conteúdo apropriado
      return responser;
    }
  } catch (error) {
    console.error("Erro:", error);
    // res.body("Erro interno do servidor");
  }
};
