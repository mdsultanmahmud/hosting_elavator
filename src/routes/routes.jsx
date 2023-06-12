import { createBrowserRouter } from "react-router-dom";
import Loyout from "../layouts/Loyout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Product from "../pages/Product/Product";
import Modernization from "../pages/Modernization/Modernization";
import Projects from "../pages/Projects/Projects";
import Download from "../pages/Download/Download";
import Blog from "../pages/Blog/Blog";
import Agent from "../pages/Agent/Agent";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Loyout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/products',
                element: <Product/>
            },
            {
                path:'/modernization',
                element:<Modernization/>
            },
            {
                path:"/projects",
                element:<Projects/>
            },
            {
                path:"/download",
                element:<Download/>
            },
            {
                path:"/blog",
                element:<Blog/>
            },
            {
                path:"/agent",
                element:<Agent/>
            },
            {
                path:"/contact",
                element:<Contact/>
            }
        ]
    }
])

export default router 