import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root";
import Home from "../../Page/Home/Home";
import About from "../../Page/Home/About";
import Blog from "../../Page/Home/Blog";
import Login from "../../Page/Home/Login";
import Register from "../../Page/Home/Register";
import CourseDetails from "../../Page/CourseDetails";
import PrivateRoute from "../PrivateRoute";

const router =createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/courses/:id',
                element: <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }

        ]
    }
])
export default router;