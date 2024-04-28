import { useContext, useEffect, useState } from "react";
import { CreatAuthContext } from "../Firebase/AuthContext";
import { FaEye, FaLocationDot, FaPen } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { TbDeviceIpadStar } from "react-icons/tb";
import { MdDelete } from "react-icons/md";

const Mylist = () => {
    const { user } = useContext(CreatAuthContext);
    const [userTorestUserAdds, setUserTorestAdd] = useState([]);


    useEffect(() => {
        // Fetch tourist spots data from the backend
        fetch('http://localhost:3000/torestplase')
            .then(res => res.json())
            .then(data => {
                // Filter the data based on the current user's email address
                const filteredData = data.filter(item => item.email === user.email);
                // Set the filtered data to state
                setUserTorestAdd(filteredData);


            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [user.email]);

    console.log(userTorestUserAdds);

    return (
        <div className="w-[90%] mx-auto">

            <div className="py-10 md:py-16 lg:py-20">
                <h2 className="text-xl md:text-5xl text-center font-bold">My torest add list page</h2>

                <div className="overflow-x-auto py-10">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="text-white">
                                    <th></th>
                                    <th className="text-xl font-bold">Email</th>
                                    <th className="text-xl font-bold">User Name</th>
                                    <th className="text-xl font-bold">countryname</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    userTorestUserAdds.map((user, index) => (
                                        <tr key={user._id}>
                                            <th>{index + 1}</th>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.countryname}</td>
                                            <td>
                                                <div>
                                                <div className="tooltip" data-tip="Detete">
                                                    <button  className="btn hover:bg-slate-400  bg-[#ea4744]">
                                                        < MdDelete className="  text-white md:text-xl"></MdDelete>
                                                    </button>
                                                </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
           </div>  
        </div>
    )
};

export default Mylist;
