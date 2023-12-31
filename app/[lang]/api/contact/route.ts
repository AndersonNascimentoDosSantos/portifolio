import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  console.log(body);
  const { email, message, subject, name } = body;

  if (!email) {
    return new NextResponse("Email is required", { status: 400 });
  }

  if (!message) {
    return new NextResponse("Message  is required", { status: 400 });
  }
  if (!subject) {
    return new NextResponse("Subject  is required", { status: 400 });
  }
  if (!name) {
    return new NextResponse("Name  is required", { status: 400 });
  }

  const contact = await prismadb.contact.create({
    data: {
      email,
      name,
      subject,
      message,
    },
  });
  return Response.json({ message: "success" }, { status: 202 });
}

export async function GET(req: NextRequest) {
  const name = req.nextUrl.searchParams.get("name");
  if (!name) {
    return new NextResponse("Name is required", { status: 400 });
  }

  const contacts = await prismadb.contact.findMany({
    where: {
      name: {
        equals: name,
      },
    },
  });

  return Response.json(contacts);
}
