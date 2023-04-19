import { useNavigate } from 'react-router-dom';
import style from './TotalOrderAmount.module.css';

const TotalOrderAmount = ({ data }) => {

    let navigate = useNavigate();

    let grandTotal = 0;
    data.map((elm) => {
        grandTotal += (elm.price * elm.itemCount)
    })

    const navigateToCheckout = () => {
        window.scrollTo(0, 0);
        navigate('/checkout')
    }

    return (
        <div className={style.totalSum}>
            <div>
                <img src="https://cdn.shopify.com/s/files/1/0702/9017/8333/files/CartPage_Payments.webp" alt="image" />
            </div>
            <div>
                <h3>Total: ${grandTotal.toFixed(2)}</h3>
                <p>Shipping & taxes calculated at checkout</p>
                <button onClick={navigateToCheckout}>CHECKOUT</button>
            </div>
        </div>
    )
}

export default TotalOrderAmount;