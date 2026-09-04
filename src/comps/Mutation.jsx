import React from "react";
import { useMutation } from "@tanstack/react-query";

async function createPost(post) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  return response.json();
}

const Mutation = () => {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const { mutate } = useMutation({ mutationFn: createPost });

  return (
    <div>
      <h2>Mutation</h2>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <button onClick={() => mutate({ title, body, id: 1 })}>
        Create Post
      </button>
    </div>
  );
};

export default Mutation;
