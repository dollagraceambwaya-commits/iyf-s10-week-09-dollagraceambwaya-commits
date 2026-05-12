import PostList from "../components/PostList";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import useLocalStorage from "../hooks/useLocalStorage";
import { LoadingSpinner } from "../components/shared";
import { ErrorMessage } from "../components/shared";

function Posts() {
  const [posts, setPosts] = useLocalStorage("posts", []);
  const { loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
  );

  const [query, setQuery] = useState("");
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase()),
  );

  if (loading) return <LoadingSpinner text="Loading posts..." />;
  if (error) return <ErrorMessage message="Failed to load posts" />;

  const handleLike = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, liked: !post.liked } : post,
      ),
    );
  };

  return (
    // <div>
    //   <h1>Posts</h1>
    //   {posts.slice(0, 5).map((post) => (
    //     <div key={post.id}>{post.title}</div>
    //   ))}

    <div>
      <input
        placeholder="Search posts..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <PostList posts={filteredPosts} onLike={handleLike} />
    </div>
  );
}

export default Posts;
