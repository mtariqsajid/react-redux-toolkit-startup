import { Route, Routes } from "react-router-dom";
import "./styles.css";
import React, { lazy } from "react";

const Home = lazy(() => import("./pages/home/Home"));
const Post = lazy(() => import("./pages/posts/Post"));

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="post" element={<Post />} />
      </Routes>
    </div>
  );
}
