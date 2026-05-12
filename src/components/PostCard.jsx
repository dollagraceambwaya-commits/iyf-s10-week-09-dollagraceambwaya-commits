import { Button } from "./shared";

function PostCard({ post, onLike }) {
  return (
    <article className="post-card">
      <h3>{post.title}</h3>
      <p>{post.body.slice(0, 100)}...</p>
      <Button onClick={() => onLike(post.id)}>
        {post.liked ? "Unlike" : "Like"}
      </Button>
    </article>
  );
}

export default PostCard;
