import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



function Addbooks({book, setbooks}){
    const history=useHistory();

    
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
        history.push("/")
        
        
    })
    
return(
<div className="add">
    <h1>Add Books</h1>
    
<TextField id="outlined-basic" label="id" variant="outlined" className="id" onChange={(e)=>setid(e.target.value)} />
<TextField id="outlined-basic" label="book name" variant="outlined" onChange={(e)=>setbook(e.target.value)}/>
<TextField id="outlined-basic" label="author" variant="outlined" onChange={(e)=>setauthor(e.target.value)} />
<TextField id="outlined-basic" label="department" variant="outlined" onChange={(e)=>setdep(e.target.value)} />

<Button variant="contained" color="success" onClick={addbooks}>ADD</Button>



</div>
    )
}
export default Addbooks;