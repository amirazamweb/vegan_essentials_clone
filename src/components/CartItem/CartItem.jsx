import style from './CartItem.module.css';
import { removeOrderFromLocalStorage } from '../ShoppingBagItem/ShoppingBagItem';
import { detectCount } from '../../redux/action';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const setItemCountInLocalStorage = (count, ind) => {
    let orderList = JSON.parse(localStorage.getItem('__vegan_order'));
    let setOrderList = orderList.map((elm, i) => {
        if (i === ind) {
            elm.itemCount = count;
            return elm;
        }
        return elm;
    })

    localStorage.setItem('__vegan_order', JSON.stringify(setOrderList));
}

const CartItem = ({ img, name, price, itemCount, index }) => {

    let dispatch = useDispatch();
    let [count, setCount] = useState(itemCount);

    const decHandler = () => {
        if (count > 1) {
            setItemCountInLocalStorage(count - 1, index);
            setCount(count - 1);
            dispatch(detectCount());
        }
    }

    const incHandler = () => {
        setItemCountInLocalStorage(count + 1, index);
        setCount(count + 1);
        dispatch(detectCount());
    }

    const removeItemHandler = () => {
        removeOrderFromLocalStorage(index);
        dispatch(detectCount());
    }
    return (
        <div className={style.item}>
            <div className={style.child1}>
                <img src={img} alt="image" />
            </div>
            <div className={style.child2}>
                <h3>{name}</h3>
                <p>${price}</p>
            </div>
            <div className={style.child3}>
                <div>
                    <i class="fa-solid fa-minus" onClick={decHandler}></i>
                    <span>{count}</span>
                    <i class="fa-solid fa-plus" onClick={incHandler}></i>
                </div>
                <div>
                    <small onClick={removeItemHandler}>remove</small>
                </div>
            </div>
            <div className={style.child4}>${(count * price).toFixed(2)}</div>
        </div>
    )
}

export default CartItem;