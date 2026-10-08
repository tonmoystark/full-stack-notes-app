"use client";

import { useParams, usePathname } from "next/navigation";
import React from "react";

const ShopsPage = () => {
  const params = useParams(); // it will provide empty array. works only on dynamic routes
  const pathName = usePathname();
  console.log(pathName);

  return (
    <div>
      <h1>ShopsPage</h1>
      <h1 className="text-3xl">
        some info about <span className="text-fuchsia-500">usePathname</span> &
        <span className="text-fuchsia-500"> useParams</span>
      </h1>
      <h1 className="text-2xl">
        in params the route needs to be dynamic and the output comes in array of
        object form
      </h1>
      <h1 className="text-2xl">
        in pathname the route does not effect anything and the output is string
      </h1>
    </div>
  );
};

export default ShopsPage;
