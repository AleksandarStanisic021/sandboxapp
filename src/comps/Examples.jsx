import { useEffect, useState } from "react";

async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const res = await response.json();
  return res;
}

const Examples = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPosts();
      setPosts(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Examples</h2>

      {posts.map((post) => (
        <li key={post.id}>{post?.title}</li>
      ))}
    </div>
  );
};

export default Examples;
