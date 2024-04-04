import { BrowserRouter as Router,Routes,  Route } from 'react-router-dom';
import Home from './components/Home/HomePage';
import Login from './components/Login/Login';
import Signup from './components/SignupForm/CreateAcct';
import Profile from './components/profile/Profile';

function App() {
  return (
    <div className="App">
   <Router>
   <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={Signup} />
          <Route path="/profile" Component={Profile} /> 
          <Route Component={Profile} /> 
    </Routes>
   </Router>
    </div>
  );
}

export default App;
