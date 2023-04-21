import style from './AboutUs.module.css';
import poster from './poster.PNG';

const AboutUs = () => {
    return (
        <>
            <div className={style.poster}><img src={poster} alt="postre" /></div>
            <div className={style.details}>
                <h2>Vegan Owned and Operated Since 1997</h2>
                <h2>The longest-operating cruelty-free retailer in the US</h2>
                <div>
                    <h3>Our Mission</h3>
                    <p>We offer unparalleled customer service and the highest quality animal-free and cruelty-free products—all in one location. VeganEssentials is a one-stop shopping destination for all things vegan. </p>
                </div>

                <div>
                    <h3>Our Guarantee</h3>
                    <p>If it’s not vegan-friendly, we don’t offer it, period. You can shop with confidence knowing that if it doesn’t meet our personal vegan ethics, you won’t find it in our store. No need to worry about checking labels and ingredient lists on the items we sell to scrutinize for hidden animal ingredients, because there aren’t any. We’ve done the work for you, so you can shop in confidence that as a vegan, you’ll be able to trust the items we offer.</p>
                </div>

                <div>
                    <h3>The VeganEssentials’ Difference</h3>
                    <p>Unlike ordering from the “big guys” online, when you shop with us, you keep your money in the vegan community – no more worrying about what percentage of your order is going to subsidize things you don’t believe in, as all orders placed with us will help support further growth to only offer more vegan items and nothing else. </p> <br />
                    <p>How many places can you shop online that you can feel comfortable knowing will only use your money to support veganism further?  Not many, but with us, that will always be the case, and has been for over 20 years.</p> <br />
                    <p>We may be a small business, but we’re fast and efficient.  We work around the clock to get orders out as quickly as we can, because we know that nobody likes waiting too long to get what they’ve ordered, so we do our best to ship every order as quickly as possible.  </p>
                </div>

                <div>
                    <h3>Working Together</h3>
                    <p>Every shipment that leaves our store is a vote in favor of supporting cruelty-free options to make for a kinder world today and for the future!</p>
                    <p>Thank you for making us your supplier of vegan products, and if we can assist in any way just call or email and we’ll be here to help you! </p>
                    <br />
                    <p>Sincerely,</p>
                    <br />
                    <p>VeganEssentials.com Team</p>
                </div>
            </div>
        </>
    )
}

export default AboutUs;