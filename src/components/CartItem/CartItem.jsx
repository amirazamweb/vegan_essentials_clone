import style from './CartItem.module.css';
import { removeOrderFromLocalStorage } from '../ShoppingBagItem/ShoppingBagItem';
import { detectCount } from '../../redux/action';
import { useDispatch } from 'react-redux';

const CartItem = ({ img, name, price, itemCount, index }) => {

    let dispatch = useDispatch();

    const decHandler = () => {
        // if (count > 1) {
        //     setCount(count - 1);
        //     setOrderCountIntoLocalStorage(count - 1, index);
        //     dispatch(removeItem());
        // }
    }

    const incHandler = () => {
        // setCount(count + 1);
        // setOrderCountIntoLocalStorage(count + 1, index);
        // dispatch(removeItem());
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
                    <span>{itemCount}</span>
                    <i class="fa-solid fa-plus" onClick={incHandler}></i>
                </div>
                <div>
                    <small onClick={removeItemHandler}>remove</small>
                </div>
            </div>
            <div className={style.child4}>${(itemCount * price).toFixed(2)}</div>
        </div>
    )
}

export default CartItem;