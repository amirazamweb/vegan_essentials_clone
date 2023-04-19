import style from './CheckoutItem.module.css';

const CheckoutItem = ({ img, title, price, itemCount }) => {
    return (
        <div className={style.product_details}>
            <div><img src={img} alt="image" />
                <span>{itemCount}</span>
            </div>
            <div>{title}</div>
            <div>${itemCount * price}</div>
        </div>
    )
}

export default CheckoutItem;