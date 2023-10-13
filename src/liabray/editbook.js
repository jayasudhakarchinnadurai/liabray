import { Button,TextField} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import *as yup from "yup";


const userschemavalidation=yup.object({
    id:yup.string().required("please fill your id"),
    bookname:yup.string().required("please fill your book name"),
    author:yup.string().required("fill your author name"),
    Dep:yup.string().required("fill your dep")
   
      });



function Editbook({book, setbooks}){
    const history=useHistory();
    const {id}=useParams();
    const data=book[id]
    

    const {values, handleChange,handleSubmit,errors}=useFormik({
        initialValues:{
            id:data.id,
            bookname:data.bookname,
            author:data.author,
            Dep:data.Dep,

        },
        validationSchema:userschemavalidation,
        onSubmit:(newdata)=>{
           book[id]=newdata;
           setbooks([...book]);
           history.push("/data")
        }

    })



    
   
    
return(
<div className="add">
    <h1>Edit Books</h1>
<form onSubmit={handleSubmit}>
    
<TextField 
 id="outlined-basic" 
 name="id"
label="id"
variant="outlined" 
value={values.id}

onChange={handleChange} />{" "}<br></br><br></br>
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
onChange={handleChange} /><br></br>
{errors.Dep? <p style={{color:"crimson"}}>{errors.Dep}</p>:""}

<Button variant="contained" color="success" type="submit">Edit</Button>

</form>

</div>

    )
}

export default Editbook;