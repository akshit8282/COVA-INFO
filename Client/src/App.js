// https://github.com/akshit8282/VideoServer-React.git
import './App.css';
import {Route} from 'react-router-dom'
import signin from './Components/Form/Signin/Signin'
import signup from './Components/Form/Signup/Signup'
import upload from './Components/Upload/Upload'
function App() {
  return (
    <div className="App">
    <Route exact path='/signIn' component={signin}/>
    <Route exact path='/signUp' component={signup}/>
    <Route exact path='/upload' component={upload}/>
    </div>
  );
}

export default App;
