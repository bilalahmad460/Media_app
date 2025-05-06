import { useContext } from "react";
import { Post } from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import { WelcomMessage } from "./WelcomMessage";

export const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListData);
  const handleGetPostsClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
      });
  };

  return (
    <>
      {postList.length === 0 && (
        <WelcomMessage onGetPostsClick={handleGetPostsClick} />
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
