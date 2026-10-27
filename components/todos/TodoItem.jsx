"use client";

import React from "react";
import { Checkbox } from "../ui/checkbox";
import { Trash } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "../ui/toast";
import { deleteTodo, toggleTodo } from "@/app/actions/todo";

const TodoItem = ({ data }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ id, completed }) => toggleTodo(id, completed),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },

    onError: (error) => {
      console.error(error);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => deleteTodo(id),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      toast.add({
        title: "Deleted successfully",
      });
    },

    onError: (error) => {
      console.error(error);
      toast.error("Something went wrong");
    },
  });

  return (
    <div className="flex items-center my-2 justify-between gap-6">
      <div className="flex items-center gap-2">
        <Checkbox
          checked={data.completed}
          id={data._id}
          disabled={mutation.isPending}
          onCheckedChange={(checked) => {
            mutation.mutate({
              id: data._id,
              completed: checked === true,
            });
            data.completed === false
              ? toast.add({
                  title: "Marked successfully",
                })
              : toast.add({
                  title: "Unmarked successfully",
                });
          }}
        />

        <label
          htmlFor={data._id}
          className={cn("text-lg text-white", data.completed && "line-through")}
        >
          {data.title}
        </label>
      </div>

      <Button
        onClick={() => deleteMutation.mutate(data._id)}
        variant="ghost"
        type="button"
      >
        <Trash />
      </Button>
    </div>
  );
};

export default TodoItem;
