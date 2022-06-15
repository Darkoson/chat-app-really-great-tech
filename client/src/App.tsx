import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Register from "./components/register/register";
import useWindow from "./hooks/useWindow";
import Chat from "./pages/chat/chat";
import Welcome from "./pages/welcome/welcome";

function App() {
  const { width } = useWindow();
  if (width <= 768) {
    // do something
    console.log("mobile mode, from App component !");
  } else {
    console.log("desktop mode, from App component !");
  }

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
