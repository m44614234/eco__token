import connectToDB from "@/config/db";
import ContactModel from "@/models/Contact";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: Request, res: NextApiResponse) {
  connectToDB();

  try {
    const body = await req.json();
    const { first_name, last_name, desc } = body;

    if (!first_name || !last_name || !desc) {
      return res.status(422).json({
        message: "Please fill in the required fields."
      });
    }

    const contact = await ContactModel.create({
      first_name,
      last_name,
      desc,
    });

    return res.status(201).json({
      message: "Contact Created Successfully :))",
      data: contact,
    });
  } catch (error: any) {
    console.log("error =>", error);
    return res.status(500).json({
      message: "Error =>",
      error,
    });
  }
}
