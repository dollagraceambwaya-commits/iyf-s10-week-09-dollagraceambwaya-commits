import { Link } from "react-router-dom";
import PostCard from "./PostCard";
import useFetch from "../hooks/useFetch";

function PostList() {
  // ✅ useFetch handles data, loading, and error
  const {
    data: posts,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!posts || posts.length === 0) return <p>No posts found.</p>;

  return (
    <div className="post-list">
      {posts.slice(0, 10).map((post) => (
        <article key={post.id}>
          <h3>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </h3>
          <PostCard post={post} />
        </article>
      ))}
    </div>
  );
}

export default PostList;
