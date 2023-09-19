import { useEffect } from "react";
import { RESTAURANT_INFO_URL } from "../../utils/constants";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
    const { resId } = useParams();
    useEffect(() => {
        getRestaurantInfo();
    }, [])

    async function getRestaurantInfo() {
        const data = await fetch(RESTAURANT_INFO_URL + resId);
        const json = await data.json();
        console.log('json res ', json)
    }
    return (
        <div className="restaurant-menu">
            <div className="heading">
                <div className="heading-info">
                    <div>     <h2>KFC</h2></div>
                    <div>   Burgers, BUoryabnit</div>
                    2.4km
                </div>
                <div className="heading-stars">
                    4.1 stars
                </div>
            </div>
            <div className="restaurant-menu-body">
                
            </div>

        </div>
    )
}
export default RestaurantMenu;