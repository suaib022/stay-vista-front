import { createBrowserRouter } from "react-router-dom";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "../Pages/Home/Home";
import Main from "../LayOut/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import RoomDetails from "../Pages/RoomDetails/RoomDetails";
import PrivateRoutes from "./PrivateRoutes";
import { getAllRooms, getSingleRoom } from "../API/Rooms";
import DashBoard from "../LayOut/DashBoard";
import MyList from "../Pages/Dashboard/Host/MyList";
import AddRoom from "../Pages/Dashboard/Host/AddRoom";
import HostRoute from "./HostRoute";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import AdminRoute from "./AdminRoute";




export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/room/:id',
                element: <PrivateRoutes><RoomDetails></RoomDetails></PrivateRoutes>,
                loader: ({ params }) => getSingleRoom(params.id)
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
    },
    {
        path: '/dashboard',
        element: <DashBoard></DashBoard>,
        children: [
            {
                path: 'myList',
                element: <PrivateRoutes><HostRoute><MyList></MyList></HostRoute></PrivateRoutes>
            },
            {
                path: 'addRoom',
                element: <PrivateRoutes><HostRoute><AddRoom></AddRoom></HostRoute></PrivateRoutes>
            },
            {
                path: 'manageUsers',
                element: <PrivateRoutes><AdminRoute><ManageUsers /></AdminRoute></PrivateRoutes>
            }
        ]
    }
])