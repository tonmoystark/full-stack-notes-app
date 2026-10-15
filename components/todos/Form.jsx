"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { toast } from "../ui/toast";

const Form = () => {
  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    toast.add({
      title: "Event created",
    });
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
        />
        <Button type="submit">
          {" "}
          <Plus size={20} /> Add
        </Button>
      </form>
    </div>
  );
};

export default Form;
