import { TextField } from "@mui/material";
import { useState } from "react";


function Addbooks({book, setbooks}){

    const history=useHist
    const [id ,setid]=useState();
    const[bookname, setbook]=useState();
    const[author,setauthor]=useState();
    const[dep, setdep]=useState();

    const addbooks=(()=>{
        const addatas={
            id,
            bookname,
            author,
            dep
        }
        setbooks([...book, addatas])
        
        
    })
    
return(
<div className="add">
    <h1>Add Books</h1>
    
<TextField id="outlined-basic" label="id" variant="outlined" className="id" onChange={(e)=>setid(e.target.value)} />
<TextField id="outlined-basic" label="book name" variant="outlined" onChange={(e)=>setbook(e.target.value)}/>
<TextField id="outlined-basic" label="author" variant="outlined" onChange={(e)=>setauthor(e.target.value)} />
<TextField id="outlined-basic" label="department" variant="outlined" onChange={(e)=>setdep(e.target.value)} />

<button onClick={addbooks}>Add</button>



</div>
    )
}
export default Addbooks;