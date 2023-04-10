import style from './CardContainer.module.css';
import Card from '../Card/Card';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CardContainer = ({ data, cardDisplayCount }) => {

    let first_8_data = [];

    let [cardDeta, setCardDeta] = useState([]);

    useEffect(() => {
        setCardDeta(data.data);
    }, [])
    return (
        <div className={style.main}>
            <h2>{data.title} {cardDisplayCount == 4 && <span><Link to="#">See All &gt;</Link></span>}</h2>
            <div className={style.cardContainer}>
                {
                    cardDeta.map((elm, i) => {
                        if (i < cardDisplayCount) {
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
                        }
                    })
                }
            </div>
        </div>
    )
}

export default CardContainer;