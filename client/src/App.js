import "./App.css";
import Register from "./components/Register";
import Password from "./components/Password";
import Username from "./components/Username";
import Recovery from "./components/Recovery";
import Reset from "./components/Reset";
import Profile from "./components/Profile";
import PageNotFound from "./components/PageNotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Username />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Password" element={<Password />} />
        <Route path="/Recovery" element={<Recovery />} />
        <Route path="/Reset" element={<Reset />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
