import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/SignUp";
import Signin from "./pages/Signin";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Home from "./pages/Home"
import Header from "./components/Header";

export default function App() {
  return(
    
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path = "/about" element={<About/>}/>
      <Route path = "/signin" element={<Signin/>}/>
      <Route path = "/profile" element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
  );
}
// import React from "react";

// export default function App() {
//   return <h1 className="text-red-500">App</h1>;
// }
