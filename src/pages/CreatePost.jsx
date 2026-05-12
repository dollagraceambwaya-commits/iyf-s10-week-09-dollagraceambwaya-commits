import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { Button, Input } from "../components/shared";

function CreatePost({ onAddPost }) {
  const [posts, setPosts] = useLocalStorage("posts", []);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title,
      content,
      author: "Dolla",
      date: new Date().toLocaleDateString(),
      likes: 0,
    };
    onAddPost(newPost);
    setPosts([...posts, newPost]);
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Post content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button type="submit">Add Post</Button>
    </form>
  );
}

export default CreatePost;
