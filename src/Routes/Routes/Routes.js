import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddTask from "../../Pages/AddTask/AddTask";
import CompletedTask from "../../Pages/CompletedTask/CompletedTask";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyTask from "../../Pages/MyTask/MyTask";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addTask',
                element: <PrivateRoute><AddTask></AddTask></PrivateRoute>
            },
            {
                path: '/myTask',
                element: <PrivateRoute><MyTask></MyTask></PrivateRoute>
            },
            {
                path: '/completedTask',
                element: <PrivateRoute><CompletedTask></CompletedTask></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])