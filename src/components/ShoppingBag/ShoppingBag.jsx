import style from './ShoppingBag.module.css';
import { closeShoppingBag } from '../../redux/action';
import { useDispatch } from 'react-redux';
import ShoppingBagItem from '../ShoppingBagItem/ShoppingBagItem';

const ShoppingBag = () => {

    let orderdList = JSON.parse(localStorage.getItem('__vegan_order')) || [];

    let dispatch = useDispatch();

    const close_poup_handler = () => {
        dispatch(closeShoppingBag());
    }

    return (
        <div className={style.main}>
            <div>
                <small>View full shopping bag</small>
                <i class="fa-solid fa-xmark" onClick={close_poup_handler}></i>
            </div>
            <div>
                <h3>Shopping Bag</h3>
                <p>(Total items {orderdList.length})</p>
            </div>

            {orderdList.map((order, index) => {
                return <ShoppingBagItem
                    img={order.img}
                    price={order.price}
                    name={order.name}
                    itemCount={order.itemCount}
                    index={index}
                />
            })}

        </div>
    )
}

export default ShoppingBag;