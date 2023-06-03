import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "./pages/login";
import { Home } from "./pages/home";
import { Loading } from "./components/loading";
import { Profile } from "./pages/profile";
import { Auth, NotAuth } from "./components/auth";

export const App = () => {
  return (
    <BrowserRouter>
      <Loading />
      <Routes>
        <Route path="/" element={
          <Auth>
            <Home />
          </Auth>
        } />
        <Route path="/profile" element={
          <Auth>
            <Profile />
          </Auth>
        } />
        <Route path="/login" element={
          <NotAuth>
            <Login />
          </NotAuth>
        } />
      </Routes>
    </BrowserRouter>
  );
}