import style from './ShoppingBagItem.module.css';
import { detectCount } from '../../redux/action';
import { useDispatch } from 'react-redux';

export const removeOrderFromLocalStorage = (ind) => {
    let orderedList = JSON.parse(localStorage.getItem('__vegan_order'));
    let orderdListAfterRemoveItem = orderedList.filter((elm, i) => {
        if (i == ind) {
            return false;
        }
        return true;
    })

    localStorage.setItem('__vegan_order', JSON.stringify(orderdListAfterRemoveItem));
}

const ShoppingBagItem = ({ img, name, price, itemCount, index }) => {

    let dispatch = useDispatch();

    const removeOrderHandler = () => {
        removeOrderFromLocalStorage(index);
        dispatch(detectCount());
    }

    return (
        <div className={style.item}>
            <div>
                <img src={img} alt="image" />
            </div>
            <div>
                <h4>{name}</h4>
                <div>
                    <span>${price}</span>
                    <span>{itemCount}</span>
                    <span><i class="fa-solid fa-trash-can" onClick={removeOrderHandler}></i></span>
                </div>
            </div>
        </div>
    )
}

export default ShoppingBagItem;