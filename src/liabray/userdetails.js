

import { useHistory } from "react-router-dom/cjs/react-router-dom.min.js";


function Studata( {book}){
    const history=useHistory();

    
    return (
        <div >
            <button onClick={()=>history.push("/")}>Dashborad</button>
          
            
    <h1>Books Name</h1>

     <div className="student">
      {book.map((per,idx)=>
       <div key={idx} className="studata">
        <h3 >Book:{per.bookname}</h3>
        <p>Author:{per.author}</p>
        <p>Dep:{per.Dep}</p>
       <button onClick={()=>history.push(`/edit/${idx}`)}>Edit</button>
        </div>
)}

</div>

        </div>
    )
}

export default Studata;