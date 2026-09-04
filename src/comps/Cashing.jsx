import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await res.json();
}

function PostList() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 5000,
    refetchOnWindowFocus: false,
    refetchInterval: 3000,
  });

  if (isError) return <p>Error fetching posts</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <ul>
      {data?.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

const Caching = () => {
  const [showPosts, setShowPosts] = useState(false);
  return (
    <div>
      <h2>Caching</h2>
      <button onClick={() => setShowPosts(!showPosts)}>
        {showPosts ? "Hide Posts" : "Show Posts"}
      </button>
      {showPosts && <PostList />}
    </div>
  );
};

export default Caching;
