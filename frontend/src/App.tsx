import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Register from "./components/register/register";
// import useWindow from "./hooks/useWindow";
import Chat from "./pages/chat/chat";
import Welcome from "./pages/welcome/welcome";
// import { Device } from "./store/actions/device-actions";

function App() {
  // const { device } = useWindow();

  // console.log(device);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Welcome />}>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="chat" element={<Chat />} />
          {/* {device !== Device.Desktop} */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
