import React from "react";
import { Link } from "react-router-dom";

function Nav({ user, setUser }) {

    let linkTitle1 = user ? user.username : "Sign Up";
    let link1 = user ? "/profile" : "/sign-up";
    
    let linkTitle2 = user ? "logout" : "Sign In"
    let link2 = user ? "/" : "/sign-in"   
    
    let logoutButton = user ? logout : () => {};

    function logout() {
        setUser(null)
        window.localStorage.removeItem("jwtToken")
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={styles.nav}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Home
                </Link>
                <div className="navbar-expand" id="navbarNav">
                    <ul className="navbar-nav d-flex flex-row ">
                        <li className="nav-item">
                            <Link to={link1} className="nav-link">
                                {linkTitle1}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={link2}
                                className="nav-link"
                                onClick={() => logoutButton()}
                            >
                                {linkTitle2}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;

const styles = {

    nav: {
        backgroundColor: "#274e67"
    },
}