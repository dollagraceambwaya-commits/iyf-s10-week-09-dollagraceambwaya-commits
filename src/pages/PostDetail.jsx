import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function PostDetail() {
  const { postId } = useParams();
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, [postId]);

  if (!posts) return <p>Loading...</p>;

  return (
    <article>
      <Link to="/posts">&larr; Back to Posts</Link>
      <h1>{posts.title}</h1>
      <p>{posts.body}</p>
    </article>
  );
}

export default PostDetail;
