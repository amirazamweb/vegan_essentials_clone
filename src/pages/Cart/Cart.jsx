import style from './Cart.module.css';
import CartItem from '../../components/CartItem/CartItem';
import { useNavigate } from 'react-router-dom';
import TotalOrderAmount from '../../components/TotalOrderAmount/TotalOrderAmount';

const Cart = () => {

    let orderdList = JSON.parse(localStorage.getItem('__vegan_order')) || [];
    let navigate = useNavigate();

    const backToShopping = () => {
        navigate('/');
        window.scrollTo(0, 0);
    }

    if (orderdList.length === 0) {
        window.scrollTo(0, 0);
    }

    return (

        orderdList.length ?

            <div className={style.main}>
                <h1>Cart</h1>
                <div className={style.heading}>
                    <div>Product</div>
                    <div>Quantity</div>
                    <div>Total</div>
                </div>

                {orderdList.map((elm, ind) => {
                    return <CartItem
                        img={elm.img}
                        name={elm.name}
                        price={elm.price}
                        itemCount={elm.itemCount}
                        index={ind}
                    />
                })}
                <TotalOrderAmount data={orderdList} />
            </div>
            :

            <div className={style.order_details_container} >
                <p>Not any items added to the cart</p>
                <button onClick={backToShopping}>Back to shopping</button>
            </div>

    )
}

export default Cart;