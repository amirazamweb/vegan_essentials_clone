import style from './Checkout.module.css';
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {

    let checkoutData = JSON.parse(localStorage.getItem('__vegan_order')) || [];
    let total = 0;

    checkoutData.forEach((elm) => {
        total += (elm.price * Number(elm.itemCount));
    })

    let cardLength = checkoutData.length;

    let navigate = useNavigate();

    useEffect(() => {
        !cardLength && navigate('/');
    })

    return (
        !cardLength ?
            <div className={style.loading}>Loading....</div> :
            <div className={style.main}>
                <CheckoutForm />
                <div className={style.child2}>
                    <div>
                        {
                            checkoutData.map((elm, i) => {
                                return <CheckoutItem
                                    key={elm.i}
                                    img={elm.img}
                                    title={elm.name}
                                    price={elm.price}
                                    itemCount={elm.itemCount}
                                />
                            })
                        }
                    </div>
                    <div><p>Subtotal <span>${total.toFixed(2)}</span></p></div>
                    <div><p>Shipping <span>$20</span></p></div>
                    <div><p>Total <span>${(total + 20).toFixed(2)}</span></p></div>
                </div>
            </div>
    )
}

export default Checkout;