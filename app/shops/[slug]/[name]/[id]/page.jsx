"use client";
import { useParams } from "next/navigation";
import React from "react";

const ShopsSlugNameId = () => {
  const params = useParams();
  console.log(params);

  return <div>ShopsSlugNameId</div>;
};

export default ShopsSlugNameId;
