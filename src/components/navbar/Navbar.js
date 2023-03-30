import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="categories">
        <h3 className="headings">Buckets</h3>
        <NavLink to={"/"}>Trending</NavLink>
        <NavLink to={"/education"}>Education</NavLink>
        <NavLink to={"/entertainment"}>Entertainment</NavLink>
        <NavLink to={"/news"}>News</NavLink>
      </div>
    </>
  );
};

export default Navbar;
