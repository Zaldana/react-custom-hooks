import React from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import EmailHooks from '../../hooks/EmailHooks';
import PasswordHooks from '../../hooks/PasswordHooks';
import "./Signin.css"


function Signin() {

    const [
        email,
        handleEmailOnChange,
        emailError,
        setEmailOnFocus,
        setEmailOnBlur,
    ] = EmailHooks();

    const [
        password,
        handlePasswordOnChange,
        ,
        ,
        ,
    ] = PasswordHooks();

    async function handleSubmit(e) {

        e.preventDefault();

        try {
            let payload = await axios.post(
                "http://localhost:3001/api/users/login",
                {
                    email,
                    password,
                }
            );

            toast.success("Logged In", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            console.log(payload.data.payload);

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
        <div className="form-div-signin">
            <main className="form-signin">
                <form onSubmit={handleSubmit}>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

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
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <button className="w-100 btn btn-lg btn-primary" type="submit">
                        Sign In
                    </button>
                </form>
            </main>
        </div>
    );
}

export default Signin;

