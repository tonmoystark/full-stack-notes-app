// import { useParams } from "next/navigation";
import React from "react";

export const generateMetadata = async ({ params }) => {
  const { slug } = await params;
  return {
    title: slug,
    description: "This is the description of the page",
  };
};

const ShopSlugPage = async ({ params }) => {
  // const params = useParams();
  // console.log(params);

  const { slug } = await params;

  return (
    <div>
      <h1>
        First i was using useParams here. but now using the meta data as you can
        see in the tab{" "}
        <span className="text-fuchsia-500">{slug}</span>
      </h1>
    </div>
  );
};

export default ShopSlugPage;
