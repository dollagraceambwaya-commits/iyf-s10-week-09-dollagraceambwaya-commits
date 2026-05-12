import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import PostDetail from "./pages/PostDetail";
import CreatePost from "./pages/CreatePost";
// import Button from "./components/Button";
// import Card from "./components/Card";
// import { Card, Button, Input, Modal, Avatar } from "./components/shared";
// import { useState } from "react";

function App() {
  // const [open, setOpen] = useState(false);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Home is used here */}
          <Route path="posts" element={<Posts />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="posts/:postId" element={<PostDetail />} />
          <Route path="create" element={<CreatePost />} />
        </Route>
      </Routes>

      {/* <div style={{ margin: "20px 0" }}>
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
      </div>

      <Card title="Card Title">
        <p>This is a card component.</p>
      </Card>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h2 className="text-lg font-bold">Modal Title</h2>
        <p>This is a modal component</p>
      </Modal>

      <Input />
      <Avatar name="Dolla Grace" /> */}
    </>
  );
}

export default App;
