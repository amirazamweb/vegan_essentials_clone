import style from './ShoppingBag.module.css';
import { closeShoppingBag } from '../../redux/action';
import { useDispatch } from 'react-redux';
import ShoppingBagItem from '../ShoppingBagItem/ShoppingBagItem';
import { useNavigate } from 'react-router-dom';

const ShoppingBag = () => {

    let orderdList = JSON.parse(localStorage.getItem('__vegan_order')) || [];

    let dispatch = useDispatch();
    let navigate = useNavigate();

    const close_poup_handler = () => {
        dispatch(closeShoppingBag());
    }

    const goToCart = () => {
        dispatch(closeShoppingBag());
        navigate('/cart');
        window.scrollTo(0, 0);
    }

    return (
        <div className={style.main}>
            <div>
                <small onClick={goToCart}>View full shopping bag</small>
                <i class="fa-solid fa-xmark" onClick={close_poup_handler}></i>
            </div>
            {orderdList.length > 0 ?
                <>
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
                </> :
                <div>
                    <h3>No items added to bag</h3>
                </div>
            }


        </div>
    )
}

export default ShoppingBag;