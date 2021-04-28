// https://github.com/akshit8282/VideoServer-React.git
import './App.css';
import {Route} from 'react-router-dom'
import signin from './Components/Form/Signin/Signin'
import signup from './Components/Form/Signup/Signup'
import upload from './Components/Upload/Upload'
import Dashboard from './Components/Dashboard/Dashboard';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import signOut from './Components/signOut.js/signOut';
import Homepage from './Components/Homepage/Homepage';
import delhi from '../src/Components/Hospitaldata/Delhi'
function App() {
  return (
    <div className="App">
     <Route exact path='/home' component={Homepage}/>
  <Route exact path='/bed' component={delhi}/>
  
     <Route exact path='/' component={Dashboard}/>

     <Route exact path='/video/:videoTitle' component={VideoPlayer}/>  
    <Route exact path='/signIn' component={signin}/>
    <Route exact path='/signUp' component={signup}/>
    <Route exact path='/upload' component={upload}/>
    <Route exact path='/signOut' component={signOut}/>
    </div>
  );
}

export default App;
