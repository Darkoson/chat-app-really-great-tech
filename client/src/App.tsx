import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Chat from "./pages/chat/chat";
import Welcome from "./pages/welcome/welcome";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Welcome />}>
            <Route index element={<Login />} />
            <Route path="signin" element={<Login />} />
            <Route path="signup" element={<Register />} />
          </Route>
          <Route path="chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
