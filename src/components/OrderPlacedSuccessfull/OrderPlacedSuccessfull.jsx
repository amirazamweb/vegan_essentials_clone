import { useNavigate } from 'react-router-dom';
import style from './OrderPlacedSuccessfull.module.css';
import { closeCheckoutPopup } from '../../redux/action';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const OrderPlacedSuccessfull = () => {

    let orderplacedCount = localStorage.getItem('count_daffa_715f_v1@3') || 0;

    let navigate = useNavigate();
    let dispatch = useDispatch();

    const navigateToHome = () => {
        window.scrollTo(0, 0);
        dispatch(closeCheckoutPopup());
        localStorage.setItem('__vegan_order', JSON.stringify([]));
        navigate('/');
    }

    return (
        <div className={style.order_placed_successful}>
            <div><i class="fa-regular fa-circle-check"></i></div>
            <div>Your order is placed successfully!</div>
            <div>Order Id: VE{orderplacedCount}</div>
            <div className={style.close_popup} onClick={navigateToHome}><i class="fa-solid fa-xmark"></i></div>
        </div>
    )
}

export default OrderPlacedSuccessfull;