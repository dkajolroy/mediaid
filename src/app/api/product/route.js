import dbConnect from "@/config/dbConfig";
import productModel from "@/models/productModel";
import { NextResponse } from "next/server";
dbConnect();

export async function GET(req) {
  const sku = req.nextUrl.searchParams.get("sku");

  try {
    // find single product By SKU
    const product = await productModel.findOne({ sku });
    return NextResponse.json({ success: true, product });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Something want wrong !",
      },
      { status: 400 }
    );
  }
}
