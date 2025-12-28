import React, { useState } from "react";
import { use } from "react";

const about = () => {
  const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [TextArea, setTextArea] = useState("");
  const [isLoading,setIsloading]=useState(false);

  const handleClearFrom=()=>{
    setFullName("");
    setEmail("");
    setTextArea("");
  };
  const handleSubmitFrom= async(e)=>{
    e.preventDefault();
    setIsloading(true);
   try{
    const response= await fetch("https://official-joke-api.appspot.com/jokes/random");
    setTimeout(()=>{
         
    const data ={
        FullName,
        Email,
        TextArea,
    };
    console.log(data);
    },5000)
   } catch (error){
    console.log(error,message);
   } finally{
    setIsloading(false);
   }


    handleClearFrom();
  };

  return (
    <>
      <div className="text-center mx-2 mb-3 gap-2">
        <div>
          <h1>Contact us</h1>
        </div>
        <form onReset={handleClearFrom} onSubmit={handleSubmitFrom}>
          <div>
            <label htmlFor="Fullname">FullName:</label>
            <input
              type="text"
              name="FullName"
              value={FullName}
              onChange={(e) => setFullName(e.target.value)}
              className="text-primary"
              placeholder="Enter your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="Email">Email:</label>
            <input type="Email" 
            name="Email" 
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-primary"
            required
            />
          </div>
          <div>
            <label htmlFor="TextArea">Message:</label>
            <textarea name="" 
            id="TextArea"
            value={TextArea}
            onChange={(e) => setTextArea(e.target.value)}
            className="text-primary"
            required
            ></textarea>
          </div>
          <button type="reset" className="btn btn-info" >Clear From</button>
          <button type="submit">Submit
          
          </button>
        </form>
      </div>
    </>
  );
};

export default about;
