import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";




function Dashborad(){
    const history=useHistory();
    
    return(
    
        <div className="library">
            <div >
            <h4 className="title">library mangement system</h4>
            </div>
            <div className="side">
            <p >Dashborad</p><br></br>
            <div>
            <button onClick={()=>history.push('/data')} >Total books</button>
            </div><br></br>
            <div>
            <button onClick={()=>history.push("/add")}>Add books</button>
            </div><br></br>
            
            <button onClick={()=>history.push("/delete")}>Remove Books</button>

            </div>


            
            
        </div>
    
    )
}


export default Dashborad;