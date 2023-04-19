import style from './CardContainer.module.css';
import Card from '../Card/Card';
import { useDispatch } from 'react-redux';
import { displayAllCard } from '../../redux/action';
import { useNavigate } from 'react-router-dom';


const CardContainer = ({ data, cardDisplayCount }) => {
    let dispatch = useDispatch();
    let navigate = useNavigate();

    const displayAllProduct = () => {
        dispatch(displayAllCard(data));
        navigate(`/collection/${data.title.toLowerCase().replaceAll(" ", "-").replaceAll('&', 'and').replaceAll(',', '')}`);
        window.scrollTo(0, 0);
    }

    return (
        <div className={style.main}>
            <h2>{data.title} {cardDisplayCount == 4 && <span onClick={displayAllProduct}>See All &gt;</span>}</h2>
            <div className={style.cardContainer}>
                {
                    data.data.map((elm, i) => {
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