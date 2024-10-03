import { NextResponse } from "next/server";
import connectDB from "@/utils/connectDB";

type User = {
  name: string;
  email: string;
};

export const POST = async (req: Request) => {
  const db = await connectDB();

  const { name, email }: User = await req.json();
  try {
    const accountsCollection = db.collection("accounts");

    await accountsCollection.insertOne({
      name,
      email,
    });

    return NextResponse.json({ message: "OK" }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: `Internal Server Error: ${err.message}` },
      { status: 500 },
    );
  }
};
