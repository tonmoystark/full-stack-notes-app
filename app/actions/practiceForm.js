"use server";

import { connectDB } from "@/lib/db";

export async function practiceForm(formData) {
  const title = formData.get("title");
  const content = formData.get("content");
  console.log(title, content);
}

export async function productForm(formData) {
  await connectDB();
  const name = formData.get("name");
  const price = formData.get("price");
  const quantity = formData.get("quantity");
  const description = formData.get("description");

  try {
    if (!name || !price || !quantity || !description) return;
    const product = await productModel.create({
      name,
      price,
      quantity,
      description,
    });
    return product;
  } catch (error) {
    console.log(error);
  }
}
