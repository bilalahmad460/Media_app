import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Sidebar } from "./components/Sidebar";
import { CreatePost } from "./components/CreatePost";
import { PostList } from "./components/PostList";
import { PostListProvider } from "./store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          {selectedTab === "Home" ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
