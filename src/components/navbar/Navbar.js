import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="headings">
      <h3>Buckets</h3>
      <div className="categories">
        <NavLink to={"/trending"}>Trending</NavLink>
        <NavLink to={"/education"}>Education</NavLink>
        <NavLink to={"/entertainment"}>Entertainment</NavLink>
        <NavLink to={"/news"}>News</NavLink>
        <NavLink to={"/History"}>History</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
