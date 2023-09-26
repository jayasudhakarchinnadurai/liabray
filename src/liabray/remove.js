// import { useState } from "react";


function Delete({book, setbooks}){
   
//    const [show, setshow]=useState(true)
   
    
    const remove=((idx)=>{
    const deleteuser=book.filter((per, id)=>per.id !==idx);
setbooks(deleteuser);
    })
    return(
       
<div className="student">
        {book.map((per,idx)=>
         <div key={idx} className="studata">
          <h3 >Book:{per.bookname}</h3>
          <p>Author:{per.author}</p>
          <p>Dep:{per.Dep}</p>
          <button onClick={()=>remove(per.id)}>Delete</button>
          </div>
  )}
 
  
   </div>    

    )
}

export default Delete;