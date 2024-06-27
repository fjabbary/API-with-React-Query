import { useState } from "react";
import "./App.css";
import DisplayPosts from "./components/DisplayPosts";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<DisplayPosts />} />
        <Route path="/add-post" element={<CreatePost />} />
        <Route path="/edit-post/:id" element={<EditPost />} />
      </Routes>
    </>
  );
}

export default App;
