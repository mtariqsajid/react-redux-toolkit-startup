import { Route, Routes } from "react-router-dom";
import "./styles.css";
import React, { lazy } from "react";
import Header from "./components/Header/Header";
import Box from "@mui/material/Box";

const Home = lazy(() => import("./pages/home/Home"));
const Post = lazy(() => import("./pages/posts/Post"));

export default function App() {
  return (
    <div className="App">
      <Box sx={{ display: "flex" }}>
        <Header />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="post" element={<Post />} />
          </Routes>
        </div>
      </Box>
    </div>
  );
}
