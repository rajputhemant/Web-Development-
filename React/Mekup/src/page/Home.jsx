import React from "react";
import logo from "../assets/Logo.png";
import girl from "../assets/n2.jpg";
import girl2 from "../assets/n3.jpg";
import girl3 from "../assets/n4.jpg";
import girl4 from "../assets/n5.jpg";

const Home = () => {
  return (
    <>
    <div>
      <div className=" w-370 h-120 flex gap-90 mx-6 mt-5 shadow-2xs shadow-blue-600 rounded bg-amber-100 ">
         <div className="w-130 h-90 m-5">
          <p>
            Our makeup store offers a wide range of high-quality beauty products
            for every skin type. From everyday essentials to professional
            makeup, we bring you trusted brands at affordable prices. We believe
            makeup is not about hiding, but enhancing your natural beauty. Shop
            with us for confidence, style, and a flawless look every day.
          </p>
          <button className=" bg-amber-300 text-red-800 border-2 shadow-2xs rounded hover:bg-blue-100 hover:text-black  mt-8 w-30 " >Go To Shop</button>
        </div>
        <div className="h-100 w-90 m-5">
          <img src={logo} className="w-600" alt="Logo" />
        </div> 
      </div>

         <div className=" bg-amber-200 w-370 h-90 mx-6 mt-1 shadow-2xs shadow-blue-800">
              <div className=" flex justify-center text-red-600 font-bold ">  
              <h1>Some Used </h1>
              </div>
        <div className="flex flex-3  justify-around mt-7">
          <div>
             <img src={girl} className="w-50 h-40" alt="Logo" />
          </div>
          <div>
             <img src={girl2} className="w-50 h-40"  alt="Logo" />
          </div>
          <div>
             <img src={girl3} className="w-50 h-40" alt="Logo" />
          </div>
          <div>
             <img src={girl4} className="w-50 h-40" alt="Logo" />
          </div>
        </div>
        </div>

      </div>
    </>
  );
};

export default Home;
