import React ,{useState}from 'react';
import Header from './components/Header';
import Home from './components/Home';
import DetailPage from './components/DetailPage';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import './sass/style.scss';

const App = () =>{
    
  const[darkMode,setDarkMode] = useState(false);
   
  
  return(
       <Router>
         <div>
           <Header darkMode={darkMode} configureDarkMode = {setDarkMode}/>
           <Switch>
    
             <Route exact path='/'  
              render={(props)=>(
                <Home{...props} darkMode = {darkMode} />
              )}
              />

              <Route path='/detail'  
              render={(props)=>(
                <DetailPage{...props} darkMode = {darkMode} />
              )}
              />
 

           </Switch>
         </div>
       </Router>
     
    )
}


export default App;