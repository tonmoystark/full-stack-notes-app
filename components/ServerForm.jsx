import { practiceForm } from "@/app/actions/practiceForm";
import React from "react";

const ServerForm = () => {
  return (
    <div>
      <h1>ServerForm</h1>
      <form action={practiceForm}>
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="content" placeholder="content" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ServerForm;
