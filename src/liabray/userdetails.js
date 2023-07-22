import React, { useState } from "react";
import { student } from "./userdata.js";

function Studata(){

    const [stu , setstu]=useState(student);
    return (
        <div >
            <h1>Students Record</h1>

     <div className="student">
      {stu.map((per,idx)=>
       <div key={idx} className="studata">
        <h3>Name:{per.name}</h3>
        <p>Email:{per.email}</p>
        <p>Year:{per.year}</p>
        </div>
)}
</div>
        </div>
    )
}

export default Studata;