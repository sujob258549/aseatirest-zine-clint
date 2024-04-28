import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import SignIn from "../SignupandSignin/SignIn";
import Signup from "../SignupandSignin/Signup";
import Errorpage from "../Errorpage/Errorpage";
import Addtorestspost from "../Addtoristspost/Addtorestspost";
import Privateroute from "../Privateroute/Privateroute";
import Alltorestsport from "../Alltorestsport/Alltorestsport";
import TorestDetail from "../Alltorestsport/TorestDetail";
import Mylist from "../Mylistpage/Mylist";
import Update from "../Update/Update";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement:<Errorpage></Errorpage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element:<SignIn></SignIn>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/addtorest',
                element:<Privateroute><Addtorestspost></Addtorestspost></Privateroute>
            },
            {
                path:'/mylist',
                element:<Privateroute><Mylist></Mylist></Privateroute>
            },
            {
                path:'/update/:id',
                element:<Privateroute><Update></Update></Privateroute>,
                loader: ({params})=> fetch(`http://localhost:3000/torestplase/${params.id}`)
            },
            {
                path:'/detail/:id',
                element:<TorestDetail></TorestDetail>,
                loader: ({params})=> fetch(`http://localhost:3000/torestplase/${params.id}`)
                
            },
            {
                path:'/alltorestaport',
                element:<Alltorestsport></Alltorestsport>
            }
        ]
    }
])


export default router;