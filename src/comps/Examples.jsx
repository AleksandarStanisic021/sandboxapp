import { useQuery } from "@tanstack/react-query";

async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const res = await response.json();
  return res;
}

const Examples = () => {
  const {
    data: posts = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  return (
    <div>
      <h2>Examples</h2>
      {isLoading && <p>Loading posts...</p>}
      {isError && <p>Could not load posts.</p>}
      {!isLoading && !isError && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post?.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Examples;
