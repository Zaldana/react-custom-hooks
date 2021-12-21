import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { useState, useEffect } from "react";
import jwtDecode from 'jwt-decode';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signin from "./components/signin/Signin";
import Signup from "./components/signup/Signup";
import Nav from "./components/nav/Nav";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import ProtectedHome from "./components/protectedHome/ProtectedHome";

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    
    let jwtToken = window.localStorage.getItem("jwtToken");

    if (jwtToken) {

      let decodedToken = jwtDecode(jwtToken);
      const currentTime = Date.now() / 1000;

      if (decodedToken.exp < currentTime) {

        window.localStorage.removeItem("jwtToken");
        setUser(null);

      } else {

        setUser({
          email: decodedToken.email,
          username: decodedToken.username
        })
      }
    }
  }, []);
  
  return (
    <div className="App">
      <ToastContainer theme="colored"/>
      <Router>
        <Nav user={user} setUser={setUser}/>
        <Routes>
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/sign-in" element={<Signin setUser={setUser} />} />
          <Route path="/protected-home"
            element={
              <PrivateRoute>
                <ProtectedHome />
              </PrivateRoute>
            }
          />
          <Route path="/" element={<h1>Home Page</h1>} />
        </Routes> 
     </Router>
    </div>
  );
}

export default App;
