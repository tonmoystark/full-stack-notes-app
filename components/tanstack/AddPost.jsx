"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";

async function addPost(newPost) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return res.json();
}

const AddPost = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
      alert("Post added successfully");
    },
    onError: (error) => console.log(error),
  });

  return (
    <div>
      <button
        className="px-4 py-2 border rounded"
        onClick={() =>
          mutation.mutate({ title: "foo", body: "bar", userId: 1 })
        }
      >
        Add new
      </button>
    </div>
  );
};

export default AddPost;
