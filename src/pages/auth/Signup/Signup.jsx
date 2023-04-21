import { Link, useNavigate } from 'react-router-dom';
import style from './Signup.module.css';
import { useRef } from 'react';
import { useState } from 'react';
import * as yup from 'yup';

const saveUserDetails = (us) => {
    let user = JSON.parse(localStorage.getItem('us__@123_12')) || {};
    user = us;
    localStorage.setItem('us__@123_12', JSON.stringify(user));
}

const Signup = () => {
    let fnameRef = useRef();
    let lnameRef = useRef();
    let emailRef = useRef();
    let passwordRef = useRef();

    let [show, setShow] = useState(false);
    let navigate = useNavigate();

    let schema = yup.object().shape({
        fname: yup.string().required(),
        lname: yup.string().required(),
        email: yup.string().required(),
        password: yup.string().required()
    })

    const submitHandler = (e) => {
        e.preventDefault();
        let userDetails = { fname: '', lname: '', email: '', password: '' }
        userDetails.fname = fnameRef.current.value;
        userDetails.lname = lnameRef.current.value;
        userDetails.email = emailRef.current.value;
        userDetails.password = passwordRef.current.value;

        schema.validate(userDetails)
            .then(() => {
                fnameRef.current.value = "";
                lnameRef.current.value = "";
                emailRef.current.value = "";
                passwordRef.current.value = "";
                setShow(false);
                saveUserDetails(userDetails);
                setTimeout(() => {
                    alert('signup sucessful');
                }, 0)
                navigate('/user/login');
            })
            .catch((err) => {
                setShow(true);
            })
    }

    const scrollTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className={style.main}>
            <h2>Create New Customer Account</h2>
            <p>Creating an account is easy. Just fill in the form below.</p>
            <form action="" onSubmit={submitHandler}>
                <label htmlFor="fname">First name*</label><br />
                <input type="text" name="" id="fname" ref={fnameRef} /><br />
                <label htmlFor="lname">Last name*</label><br />
                <input type="text" name="" id="lname" ref={lnameRef} /><br />
                <label htmlFor="email">Email*</label><br />
                <input type="email" name="" id="email" ref={emailRef} /><br />
                <label htmlFor="password">Password*</label><br />
                <input type="password" name="" id="password" ref={passwordRef} /><br />
                <input type="submit" value="Sign Up" />
            </form>
            {show && <small style={{ color: 'red' }}>All field are required</small>}<br />
            <small>Existing User? <Link to="/user/login" onClick={scrollTop}>Login</Link></small>
        </div>
    )
}

export default Signup;