"use client";
import { useParams, usePathname } from "next/navigation";
import React from "react";

const ShopsSlugNameId = () => {
  const params = useParams();
  const pathName = usePathname();
  console.log(pathName);

  return <div>ShopsSlugNameId {pathName}</div>;
};

export default ShopsSlugNameId;
