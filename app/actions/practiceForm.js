"use server";

import { connectDB } from "@/lib/db";
import { productsModel } from "@/lib/models/products.model";

export async function practiceForm(formData) {
  const title = formData.get("title");
  const content = formData.get("content");
  console.log(title, content);
}

export async function productForm(formData) {
  try {
    await connectDB();

    const name = formData.get("name")?.toString().trim();
    const price = Number(formData.get("price"));
    const quantity = Number(formData.get("quantity"));
    const description = formData.get("description")?.toString().trim();

    if (!name || !description) {
      return {
        success: false,
        message: "Name and description are required.",
      };
    }

    if (
      formData.get("price") === null ||
      formData.get("quantity") === null ||
      !Number.isFinite(price) ||
      !Number.isFinite(quantity) ||
      price < 0 ||
      quantity < 0 ||
      !Number.isInteger(quantity)
    ) {
      return {
        success: false,
        message: "Enter a valid price and quantity.",
      };
    }

    const product = await productsModel.create({
      name,
      price,
      quantity,
      description,
    });

    return {
      success: true,
      message: "Product created successfully.",
      product: JSON.parse(JSON.stringify(product)),
    };
  } catch (error) {
    console.error("Product creation failed:", error);

    return {
      success: false,
      message: "Could not create the product.",
    };
  }
}
