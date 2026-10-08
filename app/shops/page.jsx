"use client";

import { useParams } from "next/navigation";
import React from "react";

const ShopsPage = () => {
  const params = useParams(); // it will provide empty array. works only on dynamic routes
  console.log(params);

  return <div>ShopsPage</div>;
};

export default ShopsPage;
