"use server";

import { connectDB } from "@/lib/db";
import { todoModel } from "@/lib/models/todos";
import { todoSchema } from "../schemas/todoSchema";

export async function addTodo(data) {
  const validateFields = todoSchema.safeParse(data);

  if (!validateFields.success) {
    return {
      success: false,
      message: "Please fill all the fields",
      errors: validation.error.flatten().fieldErrors,
    };
  }

  try {
    await connectDB();
    const createdTodo = await todoModel.create(validateFields.data);
    return {
      success: true,
      message: "Todo created successfully",
      createdTodo: JSON.parse(JSON.stringify(createdTodo)),
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Failed to create todo",
    };
  }
}

export async function getTodo() {
  try {
    await connectDB();
    const allTodos = await todoModel.find().sort({ createdAt: -1 });
    return JSON.parse(JSON.stringify(allTodos));
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Failed to fetch todos",
    };
  }
}

export async function toggleTodo(id, completed) {
  try {
    await connectDB();
    const updatedTodo = await todoModel.findByIdAndUpdate(
      id,
      { completed },
      { new: true },
    );
    return JSON.parse(JSON.stringify(updatedTodo));
  } catch (error) {
    console.log(error);
  }
}

export async function deleteTodo(id) {
  try {
    await connectDB();
    const deletedTodo = await todoModel.findByIdAndDelete(id);
    return JSON.parse(JSON.stringify(deletedTodo));
  } catch (error) {
    console.log(error);
  }
}
