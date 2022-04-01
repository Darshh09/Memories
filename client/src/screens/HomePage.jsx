import React, {useState, useEffect} from "react";
import Navbar from "../components/Navbar";
import Forms from "../components/Forms";
import Posts from "../components/Posts";

const HomePage = () => {


  return (
    <div className= 'container'>
      <div className="row">
          <div className="col-md-8">
            <Posts  />
          </div>
          <div className="col-md-4">
            <Forms  />
          </div>
      </div>
    </div>
  );
};

export default HomePage;
