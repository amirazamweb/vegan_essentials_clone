import style from './CheckoutForm.module.css';
import checkoutImage from './../../images/logo.png';
import * as yup from 'yup';
import { useRef, useState } from 'react';
import OrderPlacedSuccessfull from '../OrderPlacedSuccessfull/OrderPlacedSuccessfull';
import { orderPlaced } from '../../redux/action';
import { useDispatch, useSelector } from 'react-redux';

const setOrderPlacedDetails = (item) => {
    localStorage.setItem('count_daffa_715f_v1@3', Number(item.orderId.slice(2)));
    let items = JSON.parse(localStorage.getItem('hs$1_gga78!')) || [];
    items.push(item);
    localStorage.setItem('hs$1_gga78!', JSON.stringify(items));
}

const CheckoutForm = () => {

    let itemListInStorage = JSON.parse(localStorage.getItem('__vegan_order')) || [];
    let orderId = localStorage.getItem('count_daffa_715f_v1@3') || 0;
    let totalAmount = 0;
    let itemCount = itemListInStorage.length;

    itemListInStorage.forEach((e) => {
        totalAmount += (e.price);
    })

    totalAmount = totalAmount.toFixed(2);

    let emailRef = useRef();
    let countryRef = useRef();
    let fnameRef = useRef();
    let lnameRef = useRef();
    let shreveportRef = useRef();
    let apartmentRef = useRef();
    let suburbRef = useRef();
    let stateRef = useRef();
    let postcodeRef = useRef();
    let phoneRef = useRef();

    let schema = yup.object().shape({
        email: yup.string().required(),
        country: yup.string().required(),
        fname: yup.string().required(),
        lname: yup.string().required(),
        shreveport: yup.string().required(),
        apartment: yup.string().required(),
        suburb: yup.string().required(),
        state: yup.string().required(),
        postcode: yup.number().required(),
        phone: yup.number().required()
    })

    let [show, setShow] = useState(false);
    let show_checkout_popup = useSelector((data) => data.show_checkout_popup);
    let dispatch = useDispatch();

    const submitForm = (e) => {
        e.preventDefault();
        let customerDetails = {};
        customerDetails.email = emailRef.current.value;
        customerDetails.country = countryRef.current.value;
        customerDetails.fname = fnameRef.current.value;
        customerDetails.lname = lnameRef.current.value;
        customerDetails.shreveport = shreveportRef.current.value;
        customerDetails.apartment = apartmentRef.current.value;
        customerDetails.suburb = suburbRef.current.value;
        customerDetails.state = stateRef.current.value;
        customerDetails.postcode = postcodeRef.current.value;
        customerDetails.phone = phoneRef.current.value;

        schema.validate(customerDetails)
            .then((res) => {
                let order = { itemCount, totalAmount, orderId: `VE${++orderId}` };
                setOrderPlacedDetails(order);
                setShow(false);
                dispatch(orderPlaced());
            })
            .catch((rej) => {
                setShow(true);
            })
    }

    return (
        <>
            <div className={style.child1}>
                <div><img src={checkoutImage} alt="image" /></div>
                <form action="">
                    <h3>Contact information</h3>
                    <div>
                        <label htmlFor="email">Email</label><br />
                        <input type="email" name="" id="email" ref={emailRef} />
                    </div>
                    <h3>Shipping Address</h3>
                    <div>
                        <label htmlFor="country">Country/region</label><br />
                        <select name="" id="country" ref={countryRef}>
                            <option value="United States">United States</option>
                            <option value="Canada">Canada</option>
                            <option value="Australia">Australia</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Finland">Finland</option>
                            <option value="Aland Islands">Aland Islands</option>
                            <option value="Albania">Albania</option>
                            <option value="Andorra">Andorra</option>
                            <option value="Armenia">Armenia</option>
                            <option value="Austria">Austria</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
                            <option value="Bulgaria">Bulgaria</option>
                            <option value="Chile">Chile</option>
                            <option value="Crotia">Crotia</option>
                            <option value="Cyprus">Cyprus</option>
                            <option value="Czechia">Czechia</option>
                            <option value="Denmark">Denmark</option>
                            <option value="Estonia">Estonia</option>
                            <option value="Faroe Islands">Faroe Islands</option>
                            <option value="Finland">Finland</option>
                            <option value="France">France</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Germany">Germany</option>
                            <option value="Gibraltar">Gibraltar</option>
                            <option value="Greece">Greece</option>
                            <option value="Greenland">Greenland</option>
                            <option value="Guadeloupe">Guadeloupe</option>
                            <option value="Guernesy">Guernesy</option>
                            <option value="Hungary">Hungary</option>
                            <option value="Iceland">Iceland</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Isle of Man">Isle of Man</option>
                            <option value="Italy">Italy</option>
                            <option value="Jeresy">Jersey</option>
                            <option value="Kosovo">Kosovo</option>
                            <option value="Latvia">Latvia</option>
                            <option value="Liechtenstien">Liechtenstien</option>
                            <option value="Lithuania">Lithuania</option>
                            <option value="Luxembourg">Luxembourg</option>
                            <option value="Malta">Malta</option>
                            <option value="Mayotte">Mayotte</option>
                            <option value="Moldova">Moldova</option>
                            <option value="Monaco">Monaco</option>
                            <option value="Montenegro">Montenegro</option>
                            <option value="Netherlands">Netherlands</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="North Macedonia">North Macedonia</option>
                            <option value="Norway">Norway</option>
                            <option value="Poland">Poland</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Reunion">Reunion</option>
                            <option value="Romania">Romania</option>
                            <option value="San Marino">San Marino</option>
                            <option value="Serbia">Serbia</option>
                            <option value="Slovakia">Slovakia</option>
                            <option value="Slovenia">Slovenia</option>
                            <option value="Spain">Spain</option>
                            <option value="Sweden">Sweden</option>
                            <option value="Switzerland">Switzerland</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="Vetican City">Vetican City</option>
                        </select>
                    </div>
                    <div className={style.first_multiple_contain_elm}>
                        <div>
                            <label htmlFor="fname">First Name</label><br />
                            <input type="text" name="" id="fname" ref={fnameRef} />
                        </div>
                        <div>
                            <label htmlFor="lname">Last Name</label><br />
                            <input type="text" name="" id="lname" ref={lnameRef} />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="shreveport">Shreveport</label><br />
                        <input type="text" name="" id="shreveport" ref={shreveportRef} />
                    </div>
                    <div>
                        <label htmlFor="">Apartments, suite, etc.</label><br />
                        <input type="text" name="" id="" ref={apartmentRef} />
                    </div>
                    <div className={style.second_multiple_contain_elm}>
                        <div>
                            <label htmlFor="suburb">Suburb</label><br />
                            <input type="text" name="" id="suburb" ref={suburbRef} />
                        </div>
                        <div>
                            <label htmlFor="territory">State/territory</label><br />
                            <select name="" id="territory" ref={stateRef}>
                                <option value="Australian Capital Territory">Australian Capital Territory</option>
                                <option value="">New South Wales</option>
                                <option value="Northern Territory">Northern Territory</option>
                                <option value="New South Wales">New South Wales</option>
                                <option value="Queensland">Queensland</option>
                                <option value="South Australia">South Australia</option>
                                <option value="Tasmania">Tasmania</option>
                                <option value="Victoria">Victoria</option>
                                <option value="Western Australia">Western Australia</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="postcode">Postcode</label><br />
                            <input type="number" name="" id="postcode" ref={postcodeRef} />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="phone">Phone</label><br />
                        <input type="number" name="" id="phone" ref={phoneRef} />
                    </div>
                    <div>
                        <button onClick={submitForm}>Continue to shipping</button>
                    </div>
                </form>
                {show && <div><small style={{ color: 'red' }}>All field are required</small></div>}
            </div>

            {show_checkout_popup && <OrderPlacedSuccessfull />}
        </>
    )
}

export default CheckoutForm;