import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";




function Dashborad(){
    const history=useHistory();
    
    return(
        <Dashborad>
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
            <button>Add books</button>
            </div><br></br>
            <div>
            <button>Books Return</button>
            </div><br></br>
            <button>Remove Books</button>

            </div>


            
            
        </div>
        </Dashborad>
    )
}


export default Dashborad;