import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";




function Dashborad(){
    const history=useHistory();
    
    return(
        <div>
          <div className="book-img"> 
         <img style={{height:"300px",width:"700px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ8JNaDpUEdWB6osdc9YbjYFxcUATs1alNMDom_T128A&s"></img>
         </div> 
        <div className="library">
            <div >
            <h4 className="title">library mangement system</h4>
            </div>
            <div className="side">
            <p >Dashborad</p><br></br>
            <div>
            <button onClick={()=>history.push('/data')} className="btn-click">Total books !  </button>
            </div><br></br>
            <div>
            <button onClick={()=>history.push("/add")} className="btn-click">  Add  Books !  </button>
            </div><br></br>
            
            <button onClick={()=>history.push("/delete")} className="btn-click">Removebook</button>

            </div>


            </div>
         
            
        </div>
    
    )
}


export default Dashborad;