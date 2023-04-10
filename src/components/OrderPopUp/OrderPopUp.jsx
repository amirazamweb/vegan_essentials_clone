import style from './OrderPopUp.module.css';
import { closeOrderPoup } from '../../redux/action';
import { useDispatch, useSelector } from 'react-redux';

const OrderPopUp = () => {

    let { img, name, price, itemCount } = useSelector((data) => {
        return data.order_popup_data
    })

    let dispatch = useDispatch();

    const closePopupHandler = () => {
        dispatch(closeOrderPoup());
    }

    const cont_shop_hand = () => {
        dispatch(closeOrderPoup());
    }

    return (
        <div className={style.main}>
            <div className={style.child1}>
                <div>
                    <img src={img} alt="image" />
                </div>
                <div>
                    <h3>{name}</h3>
                    <p><span>{itemCount}</span><span>${price}</span></p>
                </div>
            </div>
            <div className={style.child2}>
                <button onClick={cont_shop_hand}>Continue Shopping</button>
                <button>View Cart</button>
            </div>

            {/* close popup */}

            <div className={style.close_poup} onClick={closePopupHandler}><i class="fa-solid fa-xmark"></i></div>
        </div>
    )
}

export default OrderPopUp;