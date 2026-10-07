import EditProfile from "@/components/profiles/EditProfile";
import React from "react";

const editPage = async ({ params }) => {
  const { id } = await params;
  return (
    <div>
      <EditProfile id={id} />
    </div>
  );
};

export default editPage;
