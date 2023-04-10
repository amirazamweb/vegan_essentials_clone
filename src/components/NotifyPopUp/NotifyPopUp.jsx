import { useRef, useState } from 'react';
import style from './NotifyPopUp.module.css';
import { closeNotifyPoup } from '../../redux/action';
import { useDispatch, useSelector } from 'react-redux';

const NotifyPopUp = () => {

    let [show, setShow] = useState(true);
    let [showError, setShowError] = useState({ toggle: false, msg: '' });
    let emailRef = useRef();
    let dispatch = useDispatch();
    let notify_data = useSelector((data) => data.notify_data)

    const submitHandler = () => {
        if (emailRef.current.value.length === 0) {
            setShow(true);
            setShowError({ toggle: true, msg: 'Please enter email address' })
        }

        else if (emailRef.current.value.includes('@') === false) {
            setShow(true);
            setShowError({ toggle: true, msg: 'Please enter valid email address' })
        }
        else if (emailRef.current.value.includes('@') === true) {
            setShow(false);
            setShowError({ toggle: false, msg: '' })
        }
    }

    const closePopupHandler = () => {
        dispatch(closeNotifyPoup())
    }

    return (
        <div className={style.notify_popup}>
            <h2>{notify_data}</h2>
            <p>Register to receive a notification when this item comes back in stock.</p>
            {show ?
                <>
                    <input type="email" name="" id="" placeholder='Email' ref={emailRef} /><br />
                    <input type="checkbox" name="" id="" /> Add me to your email list. <br />
                    <button onClick={submitHandler}>NOTIFY ME WHEN AVAILABLE</button>
                </> :
                <div className={style.switch}>You are in! We'll let you know when it's back.</div>
            }

            {showError.toggle && <div style={{ color: "red" }}><small>{showError.msg}</small></div>}
            {/* close popup */}
            <div className={style.close_poup} onClick={closePopupHandler}><i class="fa-solid fa-xmark"></i></div>
        </div>
    )
}

export default NotifyPopUp;