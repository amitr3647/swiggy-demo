import { CDN_URL } from "../../utils/constants";
import "./RestaurantCard.css"
export default function RestaurantCard ({resData}){
    const resInfo = resData.info;
    return (
        <div className="restaurant-card">
        <div className="restaurant-card-container">
            <div className="restaurant-card-image">
                <img src={CDN_URL+resInfo.cloudinaryImageId}></img>
            </div>
            <div className="restaurant-card-info">
                <div><strong>{resInfo.name}</strong></div>
                <div>{resInfo.avgRating} stars</div>
                <div>{resInfo.cuisines.join(', ')}</div>
            </div>
        </div>
        </div>
    )
}