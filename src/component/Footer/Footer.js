import React from "react";
import logo from "../../assets/images/logo.png";
const Footer = () => {
  return (
    <div className="py-2">
      <hr className="hpx w-3/4 bg-gray-700"></hr>
      <div className="container mx-auto flex justify-between items-center">
        <img className="w-[70px]" src={logo}></img>
        <div> Copywrite &copy; made with kareem Shehab</div>
      </div>
    </div>
  );
};

export default Footer;
