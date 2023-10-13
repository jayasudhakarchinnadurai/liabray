import { Button, TextField } from "@mui/material";
import { useFormik,  } from "formik";
// import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import *as yup from "yup";



const userschemavalidation=yup.object({
    id:yup.string().required("please fill your id"),
    bookname:yup.string().required("please fill your book name"),
    author:yup.string().required("fill your author name"),
    Dep:yup.string().required("fill your dep")
   
      });


function Addbooks({book, setbooks}){
    const history=useHistory();
  
    const {values, handleChange,handleSubmit,errors}=useFormik({
        initialValues:{
            id:"",
            bookname:"",
            author:"",
            Dep:"",

        },
        validationSchema:userschemavalidation,
        onSubmit:(newdata)=>{
            setbooks([...book, newdata])
            history.push("/data")
        }

    })



    
    // const addbooks=(()=>{
    //     const addatas={
    //         id,
    //         bookname,
    //         author,
    //         dep
    //     }
    //     setbooks([...book, addatas])
    //     history.push("/")
        
        
    // })
    
return(
    
<div className="add">
    <h1>Add Books</h1>
<form onSubmit={handleSubmit}>
    
<TextField 
 id="outlined-basic" 
 name="id"
label="id"
variant="outlined" 
value={values.id}

onChange={handleChange} /><br></br><br></br>
{errors.id? <p style={{color:"crimson"}}>{errors.id}</p>:""}

<TextField 
id="outlined-basic" 
name="bookname"
label="book name" 
variant="outlined"
value={values.bookname} 
onChange={handleChange}/><br></br><br></br>
{errors.bookname? <p style={{color:"crimson"}}>{errors.bookname}</p>:""}

<TextField 
id="outlined-basic" 
name="author"
label="author" 
variant="outlined"
value={values.author}
onChange={handleChange} /><br></br><br></br>
{errors.author? <p style={{color:"crimson"}}>{errors.author}</p>:""}
<TextField 
id="outlined-basic" 
name="Dep"
label="department" 
variant="outlined" 
value={values.Dep}
onChange={handleChange} /><br></br><br></br>
{errors.Dep? <p style={{color:"crimson"}}>{errors.Dep}</p>:""}

<Button variant="contained" color="success" type="submit">ADD</Button>

</form>

</div>
    )
}
export default Addbooks;