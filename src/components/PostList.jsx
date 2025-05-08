import { useContext, useEffect, useState } from "react";
import { Post } from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import { WelcomMessage } from "./WelcomMessage";
import { LoadingSpinner } from "./LoadingSpinner";

export const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListData);
  const [feching, setFeching] = useState(false);
  useEffect(() => {
    setFeching(true);

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
        setFeching(false);
      });
    return () => {
      console.log("cleanup");
      controller.abort();
    };
  }, []);
  return (
    <>
      {feching && <LoadingSpinner />}
      {!feching && postList.length === 0 && <WelcomMessage />}
      {!feching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};
