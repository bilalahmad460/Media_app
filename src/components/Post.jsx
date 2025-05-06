import { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { PostList } from "../store/post-list-store";

export const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            onClick={() => deletePost(post.id)}
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          >
            <TiDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span className="badge bg-primary hash-tag me-2" key={tag}>
            {tag}
          </span>
        ))}
        <div className="alert alert-info reactions" role="alert">
          This post has has views by {post.reactions?.likes} people,
        </div>
      </div>
    </div>
  );
};
