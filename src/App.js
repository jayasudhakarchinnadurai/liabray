
import { Route, Switch} from 'react-router-dom';
import './App.css';
import Dashborad from './liabray/librarydashborad';
import Studata from './liabray/userdetails';


 


function App() {
 
  return (
    <div className="App">
      <Switch>

        <Route exact path="/">
        <Dashborad/>
       </Route>

       <Route path="/data">
       
       <Studata></Studata>
       </Route>

      </Switch>
     
    </div>
  );
}

export default App;
