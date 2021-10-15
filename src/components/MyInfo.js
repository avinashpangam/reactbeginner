import React from "react"

function MyInfo(props)
{
    return(
       <div className="fork">
           <h3 style={{display : props.contact.name ? "block" :"none" }}>{props.contact.name}</h3>
           <p>{props.contact.phone}</p>
           {/* <img> src={props.contact.imgUrl }</img> */}
       </div>
    )
}
 export default MyInfo