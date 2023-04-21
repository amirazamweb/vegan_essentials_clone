import { Link, useNavigate } from 'react-router-dom';
import style from './ContactUs.module.css';
import poster from './poster.PNG';
import * as yup from 'yup';
import { useRef } from 'react';
import { useState } from 'react';

const ContactUs = () => {

    let nameRef = useRef();
    let emailRef = useRef();
    let phoneRef = useRef();
    let msgRef = useRef();
    let [show, setShow] = useState(false);
    let navigate = useNavigate();

    let schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().required(),
        phone: yup.string().required(),
        msg: yup.string().required()
    })

    const submitHandler = (e) => {
        e.preventDefault();
        let msgDetails = {};
        msgDetails.name = nameRef.current.value;
        msgDetails.email = emailRef.current.value;
        msgDetails.phone = phoneRef.current.value;
        msgDetails.msg = msgRef.current.value;

        schema.validate(msgDetails)
            .then(() => {
                setShow(false);
                window.scrollTo(0, 0);
                setTimeout(() => {
                    alert('Your message has been recorded.')
                }, 0);
                navigate('/');
            })
            .catch(() => {
                setShow(true);
            })
    }

    return (
        <>
            <div className={style.poster}><img src={poster} alt="poster" /></div>
            <div className={style.details}>
                <div>
                    <h2>Got some questions or you just need help?</h2>
                    <p>
                        Need help with an existing order you've placed?
                        Contact us at <Link to="#">info@veganessentials.com</Link>
                    </p>
                    <br />
                    <p>
                        Questions on shipping costs or best shipping to choose for both domestic orders Contact us <Link to="#">at info@veganessentials.com</Link> for details.
                    </p>
                    <br />
                    <p>
                        For general product questions, product suggestions, ordering questions, marketing, or other information, please write us <Link to="#">questions@veganessentials.com</Link>
                    </p>
                    <br />
                    <p>
                        Are you a vendor interested in submitting a product for our store to carry? <Link to="#">questions@veganessentials.com</Link> for more details.
                    </p>
                    <br />
                    <p>
                        Want to give us a call?  Please try us at either of the numbers below <br />
                        <b>Toll-free: 833-407-0747</b>
                    </p>
                </div>

                <div>
                    <h2>Send us a message</h2>
                    <p>Leave your message and we'll get back to you shortly</p>
                    <form action="" onSubmit={submitHandler}>
                        <label htmlFor="name">Name*</label><br />
                        <input type="text" name="name" id="name" ref={nameRef} />
                        <br />

                        <label htmlFor="email">Email*</label><br />
                        <input type="email" name="email" id="email" ref={emailRef} />
                        <br />

                        <label htmlFor="phone">Phone*</label><br />
                        <input type="number" name="phone" id="phone" ref={phoneRef} />
                        <br />

                        <label htmlFor="message">Message*</label><br />
                        <textarea name="message" id="message" cols="30" rows="10" ref={msgRef}></textarea>
                        <br />

                        <input type="submit" value="Submit" />

                    </form>
                    {show && <small style={{ color: 'red' }}>All input field are required</small>}
                </div>
            </div>
        </>
    )
}

export default ContactUs;