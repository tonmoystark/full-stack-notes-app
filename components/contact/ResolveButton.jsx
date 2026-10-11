import { resolveBtn } from "@/app/actions/contact";
import Form from "next/form";
import React from "react";

const ResolveButton = ({ id, status }) => {
  const action = resolveBtn.bind(null, id);
  return (
    <Form action={action}>
      <button className={`px-4 py-2 bg-blue-600`} type="submit">
        Click to Resolve
      </button>
    </Form>
  );
};

export default ResolveButton;
