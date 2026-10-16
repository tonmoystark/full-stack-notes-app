import React from "react";
import { Checkbox } from "../ui/checkbox";
import { Trash } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "cn";

const TodoItem = ({ data }) => {
  return (
    <div className="flex items-center my-2 justify-between gap-6">
      <div className="flex justify-center items-center gap-2">
        <Checkbox
          checked={data.completed}
          id={data._id}
          onCheckedChange={() => {}}
        />
        <label
          htmlFor={data._id}
          className={cn("text-lg text-white", data.completed && "line-through")}
        >
          {data.title}
        </label>
      </div>
      <Button varient="ghost">
        <Trash />
      </Button>
    </div>
  );
};

export default TodoItem;
