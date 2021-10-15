import React from "react";
import jokedata from "./jokedata";
import MyInfo from "./MyInfo";

function maptest()
{
    const jokes=jokedata.map(joke=> <MyInfo name={joke.name} phone={joke.phone}/>)
         
    return(
        <div>
            {jokes}
        </div>
    )

    
}
export default maptest