
import { Route, Switch} from 'react-router-dom';
import './App.css';
import Dashborad from './liabray/librarydashborad';
import Studata from './liabray/userdetails';
import Addbooks from './liabray/addbooks';
import { useState } from 'react';
import { student } from './liabray/userdata';
import Delete from './liabray/remove.js';


 


function App() {
  const [book, setbooks]=useState(student);
 
  return (
    <div className="App">
      <Switch>

        <Route exact path="/">
        <Dashborad/>
       </Route>

       <Route path="/data">

      
       <Studata book={book} setbooks={setbooks} />
      
       </Route>

       <Route path='/add'>
        <Addbooks book={book} setbooks={setbooks}/>
       </Route>

       <Route path="/delete">
        <Delete book={book}  setbooks={setbooks}/>
       </Route>

      </Switch>
     
    </div>
  );
}

export default App;
