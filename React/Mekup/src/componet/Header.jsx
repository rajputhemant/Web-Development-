import React from 'react';
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaOutdent } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

export const Header = () => {
  return (
    <>
    
      <div className="flex  justify-between  items-center p-2 bg-blue-200 text-shadow-amber-50">
        <span className="mx-3 ">Welcom the Mekup Store</span>
        <div className=" flex gap-5 mx-3">
        <Link to={"/"} className="decoration-none flex items-center gap-2 text-red-600"> <FaHome /> <span>Home</span></Link>
        <Link to={"/about"} className="decoration-none flex items-center gap-2"> <FaOutdent /><span>About</span></Link>
        <Link to={"/product"} className="decoration-none  flex items-center gap-2"> <MdOutlineProductionQuantityLimits /><span>Product</span></Link>
      </div>
      </div>
    </>
  );
};
export default Header;
