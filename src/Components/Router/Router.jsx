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
import Bangladesh from "../SpicifaiCountry/Bangladesh";
import Thailand from "../SpicifaiCountry/Thailand";
import Indonesia from "../SpicifaiCountry/Indonesia";
import Cambodia from "../SpicifaiCountry/Cambodia";
import Vietnam from "../SpicifaiCountry/Vietnam";
import Malaysia from "../SpicifaiCountry/Malaysia";



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

            // country
            {
                path:'/thailand',
                element:<Privateroute><Thailand></Thailand></Privateroute>,
                loader:()=> fetch('https://asea-ture-zone-10.vercel.app/torestplase')
               
            },
            {
                path:'/cambodia',
                element:<Privateroute><Cambodia></Cambodia></Privateroute>,
                loader:()=> fetch('https://asea-ture-zone-10.vercel.app/torestplase')
               
            },
            {
                path:'/indonesia',
                element:<Privateroute><Indonesia></Indonesia></Privateroute>,
                loader:()=> fetch('https://asea-ture-zone-10.vercel.app/torestplase')
               
            },
            {
                path:'/malaysia',
                element:<Privateroute><Malaysia></Malaysia></Privateroute>,
                loader:()=> fetch('https://asea-ture-zone-10.vercel.app/torestplase')
               
            },
            {
                path:'/vietname',
                element:<Privateroute><Vietnam></Vietnam></Privateroute>,
                loader:()=> fetch('https://asea-ture-zone-10.vercel.app/torestplase')
               
            },
            {
                path:'/mylist',
                element:<Privateroute><Mylist></Mylist></Privateroute>
            },
            {
                path:'/country',
                element:<Privateroute><Bangladesh></Bangladesh></Privateroute>,
                loader:()=> fetch('https://asea-ture-zone-10.vercel.app/torestplase')
    
            },
            // {
            //     path:'/thailand',
            //     element:<Privateroute><Thailand></Thailand></Privateroute>
               
            // },
            // {
            //     path:'/cambodia',
            //     element:<Privateroute><Cambodia></Cambodia></Privateroute>
               
            // },
            // {
            //     path:'/indonesia',
            //     element:<Privateroute><Indonesia></Indonesia></Privateroute>
               
            // },
            // {
            //     path:'/malaysia',
            //     element:<Privateroute><Malaysia></Malaysia></Privateroute>
               
            // },
            // {
            //     path:'/vietname',
            //     element:<Privateroute><Vietnam></Vietnam></Privateroute>
               
            // },
             {
                path:'/update/:id',
                element:<Privateroute><Update></Update></Privateroute>,
                loader: ({params})=> fetch(`https://asea-ture-zone-10.vercel.app/torestplase/${params.id}`)
            },
            {
                path:'/detail/:id',
                element:<TorestDetail></TorestDetail>,
                loader: ({params})=> fetch(`https://asea-ture-zone-10.vercel.app/torestplase/${params.id}`)
                
            },
            {
                path:'/alltorestaport',
                element:<Alltorestsport></Alltorestsport>
            }
        ]
    }
])


export default router;