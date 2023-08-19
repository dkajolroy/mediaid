import dbConnect from "@/config/dbConfig";
import categoriesModel from "@/models/categoryModel";
import { NextResponse } from "next/server";
dbConnect();

export async function GET(req) {
  try {
    const categories = await categoriesModel.find();
    return NextResponse.json({ success: true, categories }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 400 });
  }
}

export async function POST(req) {
  const input = await req.json();

  //   Protected by admin / vendor
  if (!input.name || !input.image) {
    return NextResponse.json(
      { success: false, message: "Invalid credentials !" },
      { status: 400 }
    );
  }
  try {
    await categoriesModel.create(input);
    return NextResponse.json(
      { success: true, message: "Category added successfully !" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 400 });
  }
}
