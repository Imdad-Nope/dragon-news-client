import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import News from "../../Pages/Home/News/News/News";
import Categories from "../../Pages/Categories/Categories/Categories";
import MainLayout from "../../layout/MainLayout";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import TermsAndConditions from "../../Pages/others/termsAndConditions/termsAndConditions";
import ProfileDetails from "../../Pages/others/ProfileDetails/ProfileDetails";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children:[
            {
                path: '/',
                element: <Home/>,
                loader: ()=> fetch('https://dragon-news-server-two-lime.vercel.app/news')
            },
            {
                path: '/categories/:id',
                element: <Categories/>,
                loader: ({params})=>fetch(`https://dragon-news-server-two-lime.vercel.app/catergories/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivateRoutes><News/></PrivateRoutes>,
                loader:({params})=>fetch(`https://dragon-news-server-two-lime.vercel.app/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/terms',
                element: <TermsAndConditions/>
            },
            {
                path: '/profile',
                element: <PrivateRoutes><ProfileDetails/></PrivateRoutes>
            }
        ]
    }
])