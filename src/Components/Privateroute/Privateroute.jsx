import { useContext } from "react";
import { CreatAuthContext } from "../Firebase/AuthContext";
import { Navigate } from "react-router-dom";

const Privateroute = ({children}) => {
    const {user} = useContext(CreatAuthContext);
    if(user){
        return children
    }
   
        return <Navigate to={"/login"} state={location?.pathname || '/'}></Navigate>
    
};

export default Privateroute;