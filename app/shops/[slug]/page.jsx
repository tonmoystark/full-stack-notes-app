"use client";
import { useParams } from "next/navigation";
import React from "react";

const ShopSlugPage = () => {
  const params = useParams();
  console.log(params);
  return <div>ShopSlugPage</div>;
};

export default ShopSlugPage;
