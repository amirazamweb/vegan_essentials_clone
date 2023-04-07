import style from './CardContainer.module.css';
import Card from '../Card/Card';
import { useEffect, useState } from 'react';

const CardContainer = ({ data }) => {

    let [cardDeta, setCardDeta] = useState([]);

    useEffect(() => {
        setCardDeta(data.data);
    }, [])
    return (
        <div className={style.main}>
            <h2>{data.title}</h2>
            <div className={style.cardContainer}>
                {
                    cardDeta.map((elm, i) => {
                        return <Card
                            key={i}
                            img={elm.img}
                            name={elm.name}
                            price={elm.price}
                            reviews_count={elm.reviews_count}
                            inStock={elm.inStock}
                            discount_per={elm.discount_per}
                            discount_price={elm.discount_price}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default CardContainer;