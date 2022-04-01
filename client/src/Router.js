import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { HomePage, LoginPage } from "./screens";

const ScreenRouter = () => {

  const [isSignIn, setisSignIn] = useState(false);

  return (
    <Router>
      <div className="container">
        <Navbar setisSignIn={setisSignIn}/>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/auth" element={<LoginPage isSignIn = {isSignIn} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default ScreenRouter;
