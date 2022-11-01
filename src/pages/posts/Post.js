import React from "react";
import "./Post.css";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  postStatus,
  allPosts,
  loadPostAsync,
} from "../../redux/slices/postSlice";

function Post() {
  const dispatch = useDispatch();
  const posts = useSelector(allPosts);
  const status = useSelector(postStatus);

  console.log("post", posts);
  return (
    <div>
      <h1>This is the Post page</h1>
      <p>post status :{status}</p>

      <Button
        variant="contained"
        className={""}
        onClick={() => dispatch(loadPostAsync())}
      >
        Load Post Async
      </Button>
      <ul className="post-list">
        {posts.map((item, index) => (
          <li key={index}> {item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Post;
