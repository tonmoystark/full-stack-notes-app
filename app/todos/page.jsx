import Form from "@/components/todos/Form";
import TodoList from "@/components/todos/TodoList";
import React from "react";

const Todos = () => {
  return (
    <div className="text-white bg-stone-700 w-full h-screen">
      <h1 className="text-3xl font-bold text-center my-10">Todos</h1>
      <Form />
      <div className="flex justify-center mt-5 items-center">
        <TodoList />
      </div>
    </div>
  );
};

export default Todos;
