import style from './Card.module.css';

const Card = ({ img, name, price, reviews_count, inStock, discount_per, discount_price }) => {

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
                        <input type="number" min="1" max="15" defaultValue="1" />
                        <span>Add To Cart</span>
                    </> :
                    <button>Notify Me When Available</button>
                }

            </div>
            {discount_per && <div className={style.discount}>{discount_per}% OFF</div>}
        </div>
    )
}

export default Card;