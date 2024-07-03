import { NextResponse } from "next/server";
import connectDB from "@/utils/connectDB";
import Account from "../../models/Account";

export const POST = async (req) => {
  await connectDB();

  const { name, email } = await req.json();
  try {
    const newAccount = new Account({ name, email });
    await newAccount.save();

    return NextResponse.json({ message: "OK" }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: `Internal Server Error: ${err.message}` },
      { status: 500 }
    );
  }
};
