import React from "react";
import './myStyle.css'
import MyInfo from "./MyInfo";
function Sty()
{
   
   return(
       <div>
          <MyInfo
           contact={{ name:"avi",phone :"123456"}}
           />
          
          <MyInfo
           contact={{ name:"avi",phone :"123456"}}/>
         
       </div>
   )
}
export default Sty