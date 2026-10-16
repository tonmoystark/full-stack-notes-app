"use client";

import React from "react";
import TodoItem from "./TodoItem";
import { useQuery } from "@tanstack/react-query";
import { getTodo } from "@/app/actions/todo";
import { Loader2 } from "lucide-react";

const TodoList = () => {
  const {
    data: todos,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: () => getTodo(),
  });

  if (isLoading) return <Loader2 className="animate-spin" />;
  if (error) return <div>{error.message}</div>;

  if (todos.length === 0)
    return <div className="text-center">No todos yet.</div>;

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo._id} data={todo} />
      ))}
    </div>
  );
};

export default TodoList;
