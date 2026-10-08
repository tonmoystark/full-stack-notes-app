"use client";
import { useParams } from "next/navigation";
import React from "react";

const ShopsSlugName = () => {
  const params = useParams();
  console.log(params);
  return <div>ShopsSlugName</div>;
};

export default ShopsSlugName;
