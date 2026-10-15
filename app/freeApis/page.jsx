"use client";
import { useQuery } from "@tanstack/react-query";
// import React, { useEffect, useState } from "react";

const FreeApis = () => {
  //   const [data, setData] = useState(null);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(false);

  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://api.freeapi.app/api/v1/public/quotes/quote/random",
  //       );
  //       const json = await response.json();
  //       setData(json);
  //       setLoading(false);
  //     } catch (error) {
  //       setError(true);
  //       setLoading(false);
  //     }
  //   };
  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  const { data, isLoading, error } = useQuery({
    queryKey: ["data"],
    queryFn: () =>
      fetch("https://api.freeapi.app/api/v1/public/quotes/quote/random").then(
        (res) => res.json(),
      ),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  return (
    <div>
      <h1>{data.data.content}</h1>
      <h1>written by {data.data.author}</h1>
      <h1>and it's length is {data.data.length}</h1>
    </div>
  );
};

export default FreeApis;
