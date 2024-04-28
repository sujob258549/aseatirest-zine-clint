import { Outlet } from "react-router-dom";
import Navber from "../NavberandFooter/Navber";
import Footer from "../NavberandFooter/Footer";

const Root = () => {
    return (
        <div className="flex flex-col min-h-screen justify-between">
           <Navber></Navber>
           <Outlet></Outlet>
           <div className="">
           <Footer></Footer>
           </div>
        </div>
    );
};

export default Root;