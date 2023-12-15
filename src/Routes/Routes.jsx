import { createBrowserRouter } from "react-router-dom";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "../Pages/Home/Home";
import Main from "../LayOut/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import RoomDetails from "../Pages/RoomDetails/RoomDetails";
import PrivateRoutes from "./PrivateRoutes";




export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/room/:id',
                element: <PrivateRoutes><RoomDetails></RoomDetails></PrivateRoutes>
            }
        ]
    },
    {
        path: '/logIn',
        element: <LogIn></LogIn>
    },
    {
        path: '/signUp',
        element: <SignUp></SignUp>
    }
])