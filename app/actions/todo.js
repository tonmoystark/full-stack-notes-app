import { connectDB } from "@/lib/db";
import { todoModel } from "@/lib/models/todos";

export async function addTodo(data) {
  connectDB();
}
