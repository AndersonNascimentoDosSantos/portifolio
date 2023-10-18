import { NextApiResponse } from "next";

import axios from "axios";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest, res: NextApiResponse) => {
  try {
    const { token } = await req.json();
    const response = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      `secret=${process.env.RECAPTCHA_SECRET}&response=${token}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    const { data } = response;
    if (data.score > 0.5) {
      res.status(200).json({
        status: "success",
        message: "Google ReCaptcha Success",
        data,
      });
    } else {
      res.status(400).json({
        status: "failure",
        message: "Google ReCaptcha Failure",
        data,
      });
    }
  } catch (err) {
    res.status(405).json({
      status: "failure",
      message: err,
    });
  }
};
