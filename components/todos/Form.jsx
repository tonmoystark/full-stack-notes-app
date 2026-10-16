"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { toast } from "../ui/toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodo } from "@/app/actions/todo";

const Form = () => {
  const [title, setTitle] = useState("");

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data) => addTodo(data),
    onSuccess: () => {
      toast.add({
        title: "Event created",
      });
      queryClient.invalidateQueries(["todos"]);
      setTitle("");
    },
    onError: (error) => {
      console.log(error);
      toast.add({
        title: "Something went wrong",
        variant: "destructive",
      });
    },
  });

  const submitHandler = (e) => {
    e.preventDefault();
    mutation.mutate({ title });
  };

  return (
    <div className="flex justify-center items-center ">
      <form
        onSubmit={(e) => submitHandler(e)}
        className="flex w-max-6xl gap-2 "
      >
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a todo"
          className="w-full"
          disabled={mutation.isPending}
        />
        <Button type="submit">
          {" "}
          <Plus size={20} /> {mutation.isPending ? "Adding..." : "Add"}
        </Button>
      </form>
    </div>
  );
};

export default Form;
