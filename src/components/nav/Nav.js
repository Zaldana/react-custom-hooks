// import React from 'react'
// import { Link } from 'react-router-dom'

// function Nav() {
//     return (
//         <div>
//             <ul style={styles.nav}>
//                 <li style={styles.li}>
//                     <Link to="/sign-up">Sign up</Link>
//                 </li>
//                 <li style={styles.li}>
//                     <Link to="/sign-in">Sign in</Link>
//                 </li>
//             </ul>
        
//         </div>
//     )
// }

// export default Nav

// const styles = {

//     nav: {
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "flex-end",
//         paddingRight: 20,
//     },
//     li: {
//         paddingRight: 25,
//         listStyleType: "none",
//     }
// }

import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <Link className="navbar-brand" to="/">
            Navbar
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link to="/sign-up" className="nav-link active" aria-current="page">
                    Sign up
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/sign-in" className="nav-link">
                    Sign in
                </Link>
            </li>
            </ul>
        </div>
        </div>
    </nav>
    );
}

export default Nav;