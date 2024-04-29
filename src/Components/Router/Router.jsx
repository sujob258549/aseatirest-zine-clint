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
import Bangaldesh from "../Country/Bangaldesh";
import Thailand from "../Country/Thailand";
import Cambodia from "../Country/Cambodia";
import Indonesia from "../Country/Indonesia";
import Malaysia from "../Country/Malaysia";
import Vietnam from "../Country/Vietnam";



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
                path:'/bangladesh',
                element:<Privateroute><Bangaldesh></Bangaldesh></Privateroute>,
    
            },
            {
                path:'/thailand',
                element:<Privateroute><Thailand></Thailand></Privateroute>
               
            },
            {
                path:'/cambodia',
                element:<Privateroute><Cambodia></Cambodia></Privateroute>
               
            },
            {
                path:'/indonesia',
                element:<Privateroute><Indonesia></Indonesia></Privateroute>
               
            },
            {
                path:'/malaysia',
                element:<Privateroute><Malaysia></Malaysia></Privateroute>
               
            },
            {
                path:'/vietname',
                element:<Privateroute><Vietnam></Vietnam></Privateroute>
               
            },
            {
                path:'/update/:id',
                element:<Privateroute><Update></Update></Privateroute>,
                loader: ({params})=> fetch(`https://localhost/3000/torestplase/${params.id}`)
            },
            {
                path:'/detail/:id',
                element:<TorestDetail></TorestDetail>,
                loader: ({params})=> fetch(`https://localhost/3000/torestplase/${params.id}`)
                
            },
            {
                path:'/alltorestaport',
                element:<Alltorestsport></Alltorestsport>
            }
        ]
    }
])


export default router;