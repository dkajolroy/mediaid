import dbConnect from "@/config/dbConfig";
import productModel from "@/models/productModel";
import { NextResponse } from "next/server";
import { v4 } from "uuid";
dbConnect();

export async function GET(req) {
  // Params from query string
  const types = req.nextUrl.searchParams.get("types");
  const limit = req.nextUrl.searchParams.get("limit");

  try {
    switch (types) {
      case "flash_sale": {
        const data = await productModel.aggregate([
          { $match: { status: "active", typeOfSelling: "flash_sale" } },
          { $sample: { size: limit || 20 } },
        ]);
        return NextResponse.json({ success: true, products: data });
      }
      case "best_sale": {
        const data = await productModel.aggregate([
          { $match: { status: "active", typeOfSelling: "best_sale" } },
          { $sample: { size: limit || 20 } },
        ]);
        return NextResponse.json({ success: true, products: data });
      }
      case "popular": {
        const data = await productModel.aggregate([
          { $match: { status: "active", typeOfSelling: "popular" } },
          { $sample: { size: limit || 20 } },
        ]);
        return NextResponse.json({ success: true, products: data });
      }
      case "feature": {
        const data = await productModel.aggregate([
          { $match: { status: "active", typeOfSelling: "feature" } },
          { $sample: { size: limit || 20 } },
        ]);
        return NextResponse.json({ success: true, products: data });
      }
      case "push": {
        const data = await productModel.aggregate([
          { $match: { status: "active", typeOfSelling: "push" } },
          { $sample: { size: limit || 20 } },
        ]);
        return NextResponse.json({ success: true, products: data });
      }
      case "new": {
        const data = await productModel.aggregate([
          { $match: { status: "active", typeOfSelling: "new" } },
          { $sample: { size: limit || 20 } },
        ]);
        return NextResponse.json({ success: true, products: data });
      }
      default: {
        // default get product
        const data = await productModel.aggregate([
          { $match: { status: "active" } },
          { $sample: { size: limit || 20 } },
        ]);
        return NextResponse.json({ success: true, products: data });
      }
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message || "Something want wrong !" },
      { status: 400 }
    );
  }
}

// Method Post
export async function POST(req) {
  const input = await req.json();

  // Protected by admin / vendor
  if (
    !input.title ||
    !input.description ||
    !input.price ||
    !input.category ||
    !input.subcategory ||
    // !input.brand ||
    !input.images ||
    !input.thumbnail ||
    !input.availableStock ||
    !input.addedBy
  ) {
    return NextResponse.json(
      { success: false, message: "Invalid credentials !" },
      { status: 400 }
    );
  }

  // Generate SKU
  const uniqueId = v4().split("-").pop();
  const addedSlice = input.addedBy.slice(-2); // last 2 digit of user
  const catSlice = input.category.slice(-2); // last 2 digit of category
  const sku = (`${addedSlice + catSlice}-` + uniqueId).toUpperCase();

  try {
    // Then added
    await productModel.create({
      ...input,
      sku,
      status: "inactive",
      totalSales: 0,
    });
    return NextResponse.json(
      { success: true, message: "Product added successfully !" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message || "Something want wrong !" },
      { status: 400 }
    );
  }
}
