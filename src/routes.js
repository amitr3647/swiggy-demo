import App from "./App";
import Body from "./components/body/Body";
import RestaurantMenu from "./components/restaurantMenu/RestaurantMenu";
import About from "./pages/About";
import Contact from "./pages/Contact"
const routes = [
    {path:'/',
    element:<App/>,
    children: [
        {path:'/',element:<Body/>},
        {path:'/about',element:<About/>},
        {path:'/contact',element:<Contact/>},
        {path:'/restaurants/:resId',element:<RestaurantMenu/>},
    ]
},
    
]
export default routes;