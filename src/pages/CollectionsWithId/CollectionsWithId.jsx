import Category from '../../components/Category/Category';
import CategoryDetails from '../../components/CategoryDetails/CategoryDetails';
import CardConatiner from './../../components/CardContainer/CardContainer';
import chocolateCandyAndSweets from './../../data/chocolateCandyAndSweets/chocolate_candy_and_sweets.json';
import petProducts from './../../data/petProducts/pet_products.json';
import cheeseEggsAndDairy from './../../data/cheeseEggsAndDairy/cheese_eggs_and_dairy.json';
import { useParams } from 'react-router-dom';

const CollectionsWithId = () => {
    let dataArr = [chocolateCandyAndSweets, petProducts, cheeseEggsAndDairy];
    let referDatatoMap = {};
    let params = useParams();
    switch (params.id) {
        case 'chocolate-candy-sweets':
            referDatatoMap = dataArr[0];
            break;
        case 'companion-animal-products':
            referDatatoMap = dataArr[1];
            break;
        case 'cheese-eggs-dairy':
            referDatatoMap = dataArr[2];
            break;
    }

    return (
        <>
            <Category />
            <CategoryDetails
                heading={referDatatoMap.poster_heading}
                desc={referDatatoMap.poster_desc}
                img={referDatatoMap.poster_img}
            />

            {referDatatoMap.category_data.map((elm, i) => {

                return <CardConatiner key={i} data={elm} cardDisplayCount={4} />

            })}

        </>
    )
}

export default CollectionsWithId;