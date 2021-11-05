import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Signin from "./components/signin/Signin";
import Signup from "./components/signup/Signup";
import Nav from "./components/nav/Nav";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer theme="colored"/>
      <Router>
        <Nav />
        <Switch>
          <Route path="/sign-up" component={Signup} />
          <Route path="/sign-in" component={Signin} />
          <Route path="/" render={() => <h1>Home Page</h1>} />
        </Switch> 
     </Router>
    </div>
  );
}

export default App;
