import { BrowserRouter as Router,Routes,  Route } from 'react-router-dom';
import Home from './components/HomePage';
import Login from './components/Login';
import Signup from './components/CreateAcct';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
   <Router>
   <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/about" Component={Login} />
          <Route path="/contact" Component={Signup} />
          <Route Component={Profile} /> {/* This route will be rendered if no other route matches */}
    </Routes>
   </Router>
    </div>
  );
}

export default App;
