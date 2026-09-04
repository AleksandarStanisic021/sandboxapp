import React from "react";
import { useQuery } from "@tanstack/react-query";

async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
}

const Mutation = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  return (
    <div>
      <h2>Mutation</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data?.map((post) => (
        <li key={post.id}>{post?.title}</li>
      ))}
    </div>
  );
};

export default Mutation;
