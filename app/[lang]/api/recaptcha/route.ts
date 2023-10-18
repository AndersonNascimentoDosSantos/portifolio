import { NextApiRequest, NextApiResponse } from "next";

import axios from "axios";

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { token } = req.body;
    const response = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      `secret=6LcVhf8nAAAAADX2BughJ_Va9i2yWWnAt0K9If1S&response=${token}`,
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
