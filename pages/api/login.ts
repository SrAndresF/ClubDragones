import type { NextApiRequest, NextApiResponse } from 'next'
import cookie from "cookie";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse){
    if (req.method === "POST") {
      const { username, password } = req.body;
      if (
        username === process.env.ADMIN_USERNAME &&
        password === process.env.ADMIN_PASSWORD
      ) {
        res.setHeader(
          "Set-Cookie",
          cookie.serialize("token", <any | string>process.env.TOKEN, {
            maxAge: 1000 * 60 * 60 * 24 * 3,
            sameSite: "strict",
            path: "/",
          })
        );
        res.status(200).json("Succesfull");
      } else {
        res.status(400).json("Wrong Credentials!");
      }
    }
  };
  



  