"use client";

import React, { useState } from "react";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  console.log(title);
  console.log(content);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !content)
      return alert("Please fill in all of the fields dumbass");

    const response = await fetch("/api/add-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });
  };
  return (
    <div className="flex flex-col w-full gap-8">
      <form onSubmit={handleSubmit} className="flex flex-col w-full gap-8">
        <label className="text-xl font-bold"> Enter the title</label>
        <input
          className="bg-gray-100"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label className="text-xl font-bold"> Enter the content</label>
        <input
          className="bg-gray-100 h-40"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></input>
        <button type="submit"> Press to publish your post</button>
      </form>
    </div>
  );
};

export default PostForm;
