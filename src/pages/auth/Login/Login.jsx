import { Link, useNavigate } from 'react-router-dom';
import style from './Login.module.css';
import * as yup from 'yup';
import { useRef } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userDetails } from '../../../redux/action';

const Login = () => {

    let emailRef = useRef();
    let passwordRef = useRef();

    let [show, setShow] = useState({ flag: false, msg: '' });
    let navigate = useNavigate();
    let dispatch = useDispatch();

    const validateUser = (us) => {
        let user = JSON.parse(localStorage.getItem('us__@123_12')) || {};
        if (us.password === user.password && us.email === user.email) {
            window.scrollTo(0, 0);
            dispatch(userDetails({ fullName: `${user.fname} ${user.lname}`, email: user.email }));
            navigate('/user/profile')
        }
        else {
            setShow({ flag: true, msg: 'Invalid credentials' })
        }
    }

    let schema = yup.object().shape({
        email: yup.string().required(),
        password: yup.string().required()
    })

    const submitHandler = (e) => {
        e.preventDefault();
        let credetials = { email: '', password: '' };
        credetials.email = emailRef.current.value;
        credetials.password = passwordRef.current.value;
        schema.validate(credetials)
            .then(() => {
                validateUser(credetials);
            })
            .catch(() => {
                setShow({ flag: true, msg: 'All field are required' });
            })
    }

    const scrollTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className={style.main}>
            <h2>Registered Customers</h2>
            <p>If you have an account, sign in with your email address</p>
            <form action="" onSubmit={submitHandler}>
                <label htmlFor="email">Email*</label><br />
                <input type="email" name="" id="email" ref={emailRef} /><br />
                <label htmlFor="password">Password*</label><br />
                <input type="password" name="" id="password" ref={passwordRef} /><br />
                <input type="submit" value="Login" />
            </form>
            {show.flag && <small style={{ color: 'red' }}>{show.msg}</small>}<br />
            <small>New User? <Link to="/user/signup" onClick={scrollTop}>SignUp</Link></small>
        </div>
    )
}

export default Login;