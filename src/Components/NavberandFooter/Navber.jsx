import { Link, NavLink } from "react-router-dom";
import './style.css'
import { useContext, useEffect, useState } from "react";
import { CreatAuthContext } from "../Firebase/AuthContext";

const Navber = () => {

    const { user, signout } = useContext(CreatAuthContext);

    const [theme , setTheme] = useState('light');

    useEffect(() => {
        localStorage.setItem('theme' , theme)
        const locastor =localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', locastor);
    }, [theme]);

    const handleToggle = (e) => {

      
        const toggled = e.target.checked;
        if (toggled) {
            setTheme('drak');
        
        } else {
            setTheme('light');
        }
    };

    const navber = <>

        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/alltorestaport'}>All Tourists Spot</NavLink>
        <NavLink to={'/addtorest'}>Add Tourists Spot</NavLink>


    </>
    return (
        <div className="border-b-2  z-50 bg-yellow-500">
            <div className="w-[90%] mx-auto">
                <div className="navbar p-0 py-4 ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className=" manu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {
                                    navber
                                }
                            </ul>
                        </div>
                        <img className="w-32 hidden md:block" src="https://i.ibb.co/h9rjDsJ/download-removebg-preview.png" alt="" />
                    </div>
                    <div className="navbar-center manu  hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                navber
                            }
                        </ul>
                    </div>
                    <div className="navbar-end relative flex gap-2 ">
                        <div className="flex gap-2 items-center">
                            <div>
                            <input onChange={handleToggle} type="checkbox" className="toggle toggle-success" />
                            </div>
                            <button>
                                <Link to={'/signup'} className="btn w-24 font-medium text-white px-5 hover:text-black bg-[#7AA93C] rounded-md">Sign UP</Link>
                            </button>
                        </div>
                        {user ? <div className="flex gap-2 items-center ">
                            <button onClick={signout} className="btn  font-medium text-white px-5 hover:text-black bg-[#7AA93C] rounded-md">Sign Out</button>
                        </div>

                            :
                            <Link to={'/login'} className="btn  font-medium text-white px-5 hover:text-black bg-[#7AA93C] rounded-md">Login</Link>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;