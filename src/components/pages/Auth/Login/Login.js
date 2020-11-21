import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import google from '../../../../images/logos/google.png';
import facebook from '../../../../images/logos/Facebook_Logo.png';
import firebase from 'firebase/app';
import "firebase/auth";
import './login.scss';
import firebaseConfig from "./firebaseConfig";
import { userContext } from "../../../Routes/Routes";
import Header from "../../Header/Header";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../../redux/actions/LoginActions";

firebase.initializeApp(firebaseConfig);

const Login = () => {
    // let history = useHistory();
    //     let location = useLocation();
    //     let { from } = location.state || { from: { pathname: "/" } };
    // const [user,setUser] = useContext(userContext);
    const user = useSelector(state => state.login);
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    let [form,setForm] = useState(true);
    const handleToggleform = () => {
        setForm(!form);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(result => {
            const {displayName,email} = result.user;
            dispatch(login(displayName,email,true,""));
            // const newUser = {...user};
            //     newUser.name = displayName;
            //     newUser.email = email;
            //     newUser.error = "";
            //     newUser.isLoggedIn = true;
            // setUser(newUser);
            // setLoggedUser(newUser);
            // history.replace(from);
    
          }).catch(function(error) {
            const errorMessage = error.message;
            dispatch(login("","",false,errorMessage));
            // const newUser = {...user};
            //     newUser.isLoggedIn = false;
            //     newUser.error = errorMessage;
            // setUser(newUser);
          });
    }

    const handleFacebookSignIn = () => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(result => {
            console.log(result);
            const {displayName,email} = result.user;
            const newUser = {...user};
                newUser.name = displayName;
                newUser.email = email;
                newUser.isLoggedIn = true;
                newUser.error = "";
            // setUser(newUser);
            // setLoggedUser(newUser);
            // history.replace(from);
          }).catch(function(error) {
            const errorMessage = error.message;
            const newUser = {...user};
                newUser.isLoggedIn = false;
                newUser.error = errorMessage;
            // setUser(newUser);
          });
    }

    const onSubmit = (data) => {
        if(form){
            if(data.password === data.confirm && form){
                firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
                .then(res => {
                    const newUser = {...user};
                    newUser.name = data.firstName + " " + data.lastName;
                    newUser.email = data.email;
                    newUser.isLoggedIn = true;
                    newUser.error = "";
                    // setUser(newUser);
                    // history.replace(from);
                })
                .catch(function(error) {
                    const newUser = {...user};
                    newUser.isLoggedIn = false;
                    newUser.error = error.message;
                    // setUser(newUser);
                  });
                
            }else{
                const newUser = {...user};
                newUser.error = "password didn't match";
                // setUser(newUser);
            }
        }
        if(data.email && data.password && !form){
            firebase.auth().signInWithEmailAndPassword(data.email, data.password)
            .then(res => {
                console.log(res.user.displayName);
                const newUser = {...user};
                newUser.name = res.user.displayName;
                newUser.email = res.user.email;
                newUser.isLoggedIn = true;
                newUser.error2 = '';
                // setUser(newUser);
                // setLoggedUser(newUser);
                // history.replace(from);
            })
            .catch(function(error) {
                const newUser = {...user};
                newUser.isLoggedIn = false;
                newUser.error2 = error.message;
                // setUser(newUser);
              });
        }
    }
    console.log(user);
    return (
        <section className="login-section container py-5">
            <h3>{user.email}</h3>
            <div className="row d-flex justify-content-center">
                <div className="col-10 col-md-5">
                    {
                        !form &&
                        <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                        <h4>Login</h4>
                        <p className="error">{user.error}</p>
                        <input
                            className="form-control py-3 mb-3"
                            type="email"
                            name="email"
                            ref={register({ required: true, pattern: /\S+@\S+\.\S+/ } )}
                            placeholder="Username or Email"
                        />
                        <input
                            className="form-control py-3 mb-3"
                            type="password"
                            name="password"
                            ref={register({ required: true } )}
                            placeholder="Password"
                        />
                        <input className="form-control btn mb-2" type="submit" value="Login" />
                        <p>Don't have an account? <span onClick={() => handleToggleform()}>create an account</span></p>
                    </form>
                    }
                    {
                        form &&
                        <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                        <h4>Create an account</h4>
                        <p className="error">{user.error}</p>
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
                            name="lastName"
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
                    <button onClick={handleGoogleSignIn} className="login-btn"><img src={google} alt=""/> Continue With Google</button> <br/>
                    <button onClick={handleFacebookSignIn} className="login-btn"><img src={facebook} alt=""/> Continue With Facebook</button>
                </div>
            </div>
        </section>
    );
};

export default Login;
