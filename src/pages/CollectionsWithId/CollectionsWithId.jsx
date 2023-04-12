import Category from '../../components/Category/Category';
import CategoryDetails from '../../components/CategoryDetails/CategoryDetails';
import CardConatiner from './../../components/CardContainer/CardContainer';
import veganCheese from './../../data/vegan_cheese.json';
import chocolateCandyAndSweets from './../../data/chocolateCandyAndSweets/chocolate_candy_and_sweets.json';

const CollectionsWithId = () => {
    return (
        <>
            <Category />
            <CategoryDetails
                heading={chocolateCandyAndSweets.poster_heading}
                desc={chocolateCandyAndSweets.poster_desc}
                img={chocolateCandyAndSweets.poster_img}
            />
            {chocolateCandyAndSweets.category_data.map((elm) => {

                return <CardConatiner data={elm} cardDisplayCount={4} />

            })}

        </>
    )
}

export default CollectionsWithId;