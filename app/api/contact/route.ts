import connectToDB from "@/config/db";
import ContactModel from "@/models/Contact";

export async function POST(req: Request, res: Response) {
  connectToDB();

  try {
    const body = await req.json();
    const { first_name, last_name, desc } = body;

     if(!first_name || !last_name || !desc) {
      return Response.json(
        { message: "Please fill in the required fields."},
        {
          status: 422,
        }
      );
    }
    
    const contact = await ContactModel.create({
      first_name,
      last_name,
      desc,
    });



    return Response.json(
      { message: "Contact Create Successfully :))", data: contact },
      {
        status: 201,
      }
    );
  } catch (error:any) {
    console.log("error =>", error);
    return Response.json(
      { message: "Error =>", error },
      {
        status: 500,
      }
    );
  }
}
