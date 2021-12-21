import axios from 'axios';
import { toast } from 'react-toastify';
import FirstNameHooks from '../../hooks/FirstNameHook';
import LastNameHooks from '../../hooks/LastNameHooks'
import UsernameHooks from '../../hooks/UsernameHooks';
import PasswordHooks from '../../hooks/PasswordHooks';
import EmailHooks from '../../hooks/EmailHooks';
import CheckToken from '../../hooks/CheckToken';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react'
import "./Signup.css"


function Signup() {

    const navigate = useNavigate()

    const { checkJwtToken } = CheckToken()

    const [firstName, handleFirstNameOnChange, firstNameError] = FirstNameHooks();

    const [
        lastName,
        handleLastNameOnChange,
        lastNameError,
        lastNameSetOnFocus,
        lastNameSetOnBlur,
    ] = LastNameHooks();

    const [
        username,
        handleUsernameOnChange,
        usernameError,
        setUsernameOnFocus,
        setUsernameOnBlur,
    ] = UsernameHooks();

    const [
        password,
        handlePasswordOnChange,
        passwordError,
        setPasswordOnFocus,
        setPasswordOnBlur,
    ] = PasswordHooks();

    const [
        email,
        handleEmailOnChange,
        emailError,
        setEmailOnFocus,
        setEmailOnBlur,
    ] = EmailHooks();

    useEffect(() => {
        if (checkJwtToken()) {
            navigate("/")
        }
    }, []);

    async function handleSubmit(e) {
        
        e.preventDefault();

        try {
            let payload = await axios.post(
                "http://localhost:3001/api/users/create-user",
                {
                    firstName,
                    lastName,
                    username,
                    email,
                    password,
                }
            );

            console.log(payload);

            toast.success("Congrats~! now you please sign in", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        } catch (e) {

            toast.error(e.response.data.error, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    return (
        <div className="form-div-signup">
            <main className="form-signin">
                <form onSubmit={handleSubmit}>
                    <h1 className="h3 mb-3 fw-normal">Please Sign Up</h1>

                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            placeholder="first name"
                            onChange={handleFirstNameOnChange}
                        />
                        <div>{firstNameError && firstNameError}</div>
                        <label htmlFor="floatingInput">First Name</label>
                    </div>

                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            placeholder="last name"
                            onFocus={() => lastNameSetOnFocus(true)}
                            onBlur={() => lastNameSetOnBlur(true)}
                            onChange={handleLastNameOnChange}
                        />
                        <div>{lastNameError && lastNameError}</div>
                        <label htmlFor="floatingInput">Last Name</label>
                    </div>

                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="username"
                            onFocus={() => setUsernameOnFocus(true)}
                            onBlur={() => setUsernameOnBlur(true)}
                            onChange={handleUsernameOnChange}
                        />
                        <div>{usernameError && usernameError}</div>
                        <label htmlFor="floatingInput">Username</label>
                    </div>

                    <div className="form-floating">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            onChange={handleEmailOnChange}
                            onFocus={() => setEmailOnFocus(true)}
                            onBlur={() => setEmailOnBlur(true)}
                        />
                        <div>{emailError && emailError}</div>
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            onChange={handlePasswordOnChange}
                            onFocus={() => setPasswordOnFocus(true)}
                            onBlur={() => setPasswordOnBlur(true)}
                        />
                        <div>{passwordError && passwordError}</div>
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <button className="w-100 btn btn-lg btn-primary" type="submit">
                        Sign Up
                    </button>
                </form>
            </main>
        </div>
    );
}

export default Signup;

// import React from 'react'
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import FirstNameHooks from '../../hooks/FirstNameHook';
// import LastNameHooks from '../../hooks/LastNameHooks'
// import UsernameHooks from '../../hooks/UsernameHooks';
// import PasswordHooks from '../../hooks/PasswordHooks';
// import EmailHooks from '../../hooks/EmailHooks';


// function Signup() {
    
//     const [
//         firstName,
//         handleFirstNameOnChange,
//         firstNameError
//     ] = FirstNameHooks();
    
//     const [
//         lastName,
//         handleLastNameOnChange,
//         lastNameError,
//         lastNameSetOnFocus,
//         lastNameSetOnBlur
//     ] = LastNameHooks();

//     const [
//         username,
//         handleUsernameOnChange,
//         usernameError,
//         usernameSetOnFocus,
//         usernameSetOnBlur
//     ] = UsernameHooks();

//     const [
//         password,
//         handlePasswordOnChange,
//         passwordError,
//         passwordSetOnFocus,
//         passwordSetOnBlur
//     ] = PasswordHooks();

//     const [
//         email,
//         handleEmailOnChange,
//         emailError,
//         emailSetOnFocus,
//         emailSetOnBlur
//     ] = EmailHooks();

//     async function handleSubmit(e) {
//         e.preventDefault();

//         try {

//             let payload = await axios.post("http://localhost:3001/api/users/create-user", {
//                 firstName,
//                 lastName,
//                 username,
//                 email,
//                 password,
//             })

//             toast.success('🦄 Wow so easy!', {
//                 position: "top-right",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//             });

//         } catch (e) {
                
//                 toast.error(e.response.data.error, {
//                     position: "top-center",
//                     autoClose: false,
//                     hideProgressBar: true,
//                     closeOnClick: true,
//                     pauseOnHover: true,
//                     draggable: true,
//                     progress: undefined,
//                 });
            
//         }
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <div>First Name</div>
//                 <input name="firstName" onChange={handleFirstNameOnChange} />
//                 <div>{firstNameError && firstNameError}</div>
//                 <div>Last Name</div>
//                 <input
//                     name="lastName"
//                     onChange={handleLastNameOnChange}
//                     onFocus={() => lastNameSetOnFocus(true)}
//                     onBlur={() => lastNameSetOnBlur(true)}
//                 />
//                 <div>{lastNameError && lastNameError}</div>
//                 <div>Username</div>
//                 <input
//                     name="username"
//                     onChange={handleUsernameOnChange}
//                     onFocus={() => usernameSetOnFocus(true)}
//                     onBlur={() => usernameSetOnBlur(true)}
//                 />
//                 <div>{usernameError && usernameError}</div>
//                 <div>Email</div>
//                 <input
//                     name="email"
//                     onChange={handleEmailOnChange}
//                     onFocus={() => emailSetOnFocus(true)}
//                     onBlur={() => emailSetOnBlur(true)}
//                 />
//                 <div>{emailError && emailError}</div>
//                 <div>Password</div>
//                 <input
//                     name="password"
//                     onChange={handlePasswordOnChange}
//                     onFocus={() => passwordSetOnFocus(true)}
//                     onBlur={() => passwordSetOnBlur(true)}
//                 />
//                 <div>{passwordError && passwordError}</div>
//                 <button>Submit</button>
//             </form>
//         </div>
//     )
// }

// export default Signup