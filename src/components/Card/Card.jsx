import style from './Card.module.css';
import { showNotifyPoup } from '../../redux/action';
import { showOrderPoup } from '../../redux/action';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { showItemAlreadyAddedNotify } from '../../redux/action';

let orderStoreinLocalStorage = (order) => {
    let orderedList = JSON.parse(localStorage.getItem('__vegan_order')) || [];
    let duplicateOrder = orderedList.find((elm) => {
        return elm.name == order.name
    })
    if (!duplicateOrder) {
        orderedList.push(order);
        localStorage.setItem('__vegan_order', JSON.stringify(orderedList));
    }
}

const Card = ({ img, name, price, reviews_count, inStock, discount_per, discount_price }) => {
    let dispatch = useDispatch();
    let countRef = useRef();

    let itemListInStorage = JSON.parse(localStorage.getItem('__vegan_order')) || [];

    let isAdded = itemListInStorage.find((elm) => {
        return elm.name === name;
    })

    const notifyHandler = () => {
        dispatch(showNotifyPoup(name));
    }

    const orderHandler = () => {
        if (!isAdded) {
            let cardDetails = { img, name, price, itemCount: Number(countRef.current.value) };
            orderStoreinLocalStorage(cardDetails);
            dispatch(showOrderPoup({ img, name, price, itemCount: Number(countRef.current.value) }));
        }

        else {
            dispatch(showItemAlreadyAddedNotify());
        }
    }

    return (
        <div className={style.card}>
            <div className={style.child1}><img src={img} alt="card-image" /></div>
            <div className={style.child2}>{name}</div>
            <div className={style.child3}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                {reviews_count > 1 ? <span>{reviews_count} reviews</span> : <span>{reviews_count} review</span>}
            </div>
            <div className={style.child4}>
                {discount_price && <span><del>${discount_price}</del></span>}
                {discount_price ? <span style={{ color: 'red' }}>${price}</span> : <span>${price}</span>}
                {
                    inStock ?
                        <span className={style.checkStock} style={{ backgroundColor: '#369e45' }}>In Stock</span> :
                        <span className={style.checkStock} style={{ backgroundColor: '#f52f2f' }}>Sold Out</span>
                }
            </div>
            <div className={style.child5}>
                {inStock ?
                    <>
                        <input type="number" min="1" max="15" defaultValue="1" ref={countRef} />
                        <span onClick={orderHandler}>Add To Cart</span>
                    </> :
                    <button onClick={notifyHandler}>Notify Me When Available</button>
                }

            </div>
            {discount_per && <div className={style.discount}>{discount_per}% OFF</div>}

            {isAdded && <div className={style.added_notify}><small>added</small></div>}

        </div>
    )
}

export default Card;