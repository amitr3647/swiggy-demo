import RestaurantCard from "../restaurantCard/RestaurantCard";
import { restaurantData } from "../../utils/mockData";
import './body.css';
import { useEffect, useState } from "react";
import Shimmer from "../shimmer/Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_INFO_URL } from "../../utils/constants";
const Body = ()=>{
    const [resList,setResList]= useState([]);
    const [filteredResList, setFilteredResList] = useState([]);
    const [searchText,setSearchText] = useState('');
    
    useEffect(()=>{
fetchData();
    },[])
   function onSearchClick(){
        console.log('search clicked');
        const filteredList = resList.filter(res=>res.info.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));

        console.log('filter list',filteredList);
        setFilteredResList(filteredList)

        
    }

    async function fetchData(){
const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
const json = await data.json();
console.log('json',json)
const newResList = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
setResList(newResList)
setFilteredResList(newResList)
    }
    function onFilterClick(){
       const filteredList = resList.filter(data=>data.info.avgRating>=4.3)
       setFilteredResList(filteredList);
        console.log('filter cclicked',resList);
        
    }
    //conditional rendering
    console.log('filterreslist',filteredResList)
    return filteredResList?.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="body-top">

            <div className="search">
                <input type="text" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value)
                }} ></input>
                <button className="search-btn" onClick={onSearchClick}>Search</button>
            </div>
            <div className="filter">

            <button onClick={onFilterClick}>Filter</button>
            </div>
            </div>
            <div className="res-container">
                {filteredResList.map(resData=>{
                    console.log('res data23',resData)
                    return <Link 
                    key={resData.info.id}
                    to={'restaurants/'+resData.info.id}>
                    <RestaurantCard  resData={resData}></RestaurantCard>
                    </Link>

                })}
            </div>
        </div>
    )
}
export default Body;