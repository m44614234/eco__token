import connectToDB from "@/config/db";
import ContactModel from "@/models/Contact";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  connectToDB();

  try {
    const body = await req.json();
    const { first_name, last_name, desc } = body;

    if (!first_name || !last_name || !desc) {
      return NextResponse.json(
        { message: "Please fill in the required fields." },
        { status: 422 }
      );
    }

    const contact = await ContactModel.create({
      first_name,
      last_name,
      desc,
    });

    const response = NextResponse.json(
      {
        message: "Your Message has been Created Successfully :))",
        data: contact,
      },
      { status: 201 }
    );

  
    return response;
  } catch (error: any) {
    console.log("error =>", error);
    return NextResponse.json({ message: "Error =>", error }, { status: 500 });
  }
}

