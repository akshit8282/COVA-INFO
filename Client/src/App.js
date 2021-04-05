
import './App.css';
import {Route} from 'react-router-dom'
import signin from './Components/Form/Signin/Signin'
function App() {
  return (
    <div className="App">
    <Route exact path='/signIn' component={signin}/>
    </div>
  );
}

export default App;
