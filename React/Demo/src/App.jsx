import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap-icons/font/bootstrap-icons.css";

import{ BrowserRouter ,Route, Routes} from "react-router-dom";
import Header from "./componet/Header";
import Footer from "./componet/footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Conctact from "./pages/Conctact";


function App(){
 

  return(
    <>
       <BrowserRouter>
       <Header/>
        <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/about" element ={<About/>}/>
        <Route path="/product" element ={<Product/>}/>
        <Route path="/conctact" element ={<Conctact/>}/>
        </Routes>


       <Footer/>
       </BrowserRouter>
    </>
  );
}


export default App;