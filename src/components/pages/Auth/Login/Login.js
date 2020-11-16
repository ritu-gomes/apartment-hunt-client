import React, { useState } from "react";
import { useForm } from "react-hook-form";
import google from '../../../../images/logos/google.png';
import facebook from '../../../../images/logos/Facebook_Logo.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import './login.scss';
import firebaseConfig from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const { register, handleSubmit, errors } = useForm();
    let [form,setForm] = useState(true);
    const onSubmit = (data) => {
        console.log(data);
    };
    const handleToggleform = () => {
        // user.error = '';
        // user.error2 = '';
        setForm(!form);
    }
    return (
        <section className="login-section container py-5">
            <div className="row d-flex justify-content-center">
                <div className="col-10 col-md-5">
                    {
                        form &&
                        <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                        <h4>Login</h4>
                        <input
                            className="form-control py-3 mb-3"
                            type="email"
                            name="email"
                            ref={register({ required: true })}
                            placeholder="Username or Email"
                        />
                        <input
                            className="form-control py-3 mb-3"
                            type="password"
                            name="password"
                            ref={register({ required: true })}
                            placeholder="Password"
                        />
                        <input className="form-control btn mb-2" type="submit" value="Login" />
                        <p>Don't have an account? <span onClick={() => handleToggleform()}>create an account</span></p>
                    </form>
                    }
                    {
                        !form &&
                        <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                        <h4>Create an account</h4>
                        <input
                            className="form-control py-3 mb-2"
                            type="name"
                            name="firstName"
                            ref={register({ required: true, pattern: /^[a-zA-Z '.-]*$/ })}
                            placeholder="FULL NAME"
                        />
                        <input
                            className="form-control py-3 mb-2"
                            type="name"
                            name="secondName"
                            ref={register({ required: true, pattern: /^[a-zA-Z '.-]*$/ })}
                            placeholder="FULL NAME"
                        />
                        <input
                            className="form-control py-3 mb-3"
                            type="email"
                            name="email"
                            ref={register({ required: true })}
                            placeholder="Email"
                        />
                        <input
                            className="form-control py-3 mb-3"
                            type="password"
                            name="password"
                            ref={register({ required: true })}
                            placeholder="Password"
                        />
                        <input
                            className="form-control py-3 mb-3"
                            type="password"
                            name="confirm"
                            ref={register({ required: true })}
                            placeholder="Confirm Password"
                        />
                        <input className="form-control btn mb-2" type="submit" value="Login" />
                        <p>Allready have an account? <span onClick={() => handleToggleform()}>Login</span></p>
                    </form>
                    }
                    <p className="my-3 or">or</p>
                    <button className="login-btn"><img src={google} alt=""/> Continue With Google</button> <br/>
                    <button className="login-btn"><img src={facebook} alt=""/> Continue With Facebook</button>
                </div>
            </div>
        </section>
    );
};

export default Login;
