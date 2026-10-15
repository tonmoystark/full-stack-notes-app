import Form from "@/components/todos/Form";
import React from "react";

const Todos = () => {
  return (
    <div className="text-white bg-stone-700 w-full h-screen">
      <h1 className="text-3xl font-bold text-center my-10">Todos</h1>
      <Form />
    </div>
  );
};

export default Todos;
