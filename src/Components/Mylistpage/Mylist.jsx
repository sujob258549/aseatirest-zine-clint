import { useContext, useEffect, useState } from "react";
import { CreatAuthContext } from "../Firebase/AuthContext";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { IoEyedrop } from "react-icons/io5";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Mylist = () => {
    const { user } = useContext(CreatAuthContext);
    const [userTorestUserAdds, setUserTorestAdd] = useState([]);

    useEffect(() => {
        // Fetch tourist spots data from the backend
        fetch('https://localhost/3000/torestplase')
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


    // delete functon 

    const handelDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://localhost/3000/torestplase/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data.deteteCount > 0)
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });



                    })
                const updatedUsers = userTorestUserAdds.filter(user => user._id !== _id);
                setUserTorestAdd(updatedUsers);
            }
        });
    }

    return (
        <div className="w-[90%] mx-auto">
            <div className="py-10 md:py-16 lg:py-20">
                <h2 className="text-xl md:text-5xl text-center font-bold">My torest add list page</h2>
                <div className="overflow-x-auto py-10">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="">
                                <th></th>
                                <th className="text-xl font-bold">Email</th>
                                <th className="text-xl font-bold">Tourists spotname</th>
                                <th className="text-xl font-bold">countryname</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {userTorestUserAdds.map((user, index) => (
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.email}</td>
                                    <td>{user.Touristsspotname}</td>
                                    <td>{user.countryname}</td>
                                    <td>
                                        <div className="flex">
                                            <div>
                                                <a className="bg-transparent  p-0" id="my-anchor-elementes-id">
                                                    <Link to={`/detail/${user._id}`} className="btn hover:bg-slate-400  bg-[#449aea]">
                                                        < FaEye className="  text-white md:text-xl"></FaEye>
                                                    </Link>
                                                </a>
                                                <Tooltip
                                                    anchorSelect="#my-anchor-elementes-id"
                                                    content="Details"
                                                />
                                            </div>
                                            <div>
                                                <a className="bg-transparent  p-0" id="my-anchor-elements-id">
                                                    <Link to={`/update/${user._id}`} className="btn hover:bg-slate-400  bg-[#3939a3]">
                                                        < IoEyedrop className="  text-white md:text-xl"></IoEyedrop >
                                                    </Link>
                                                </a>
                                                <Tooltip
                                                    anchorSelect="#my-anchor-elements-id"
                                                    content="Update"
                                                />
                                            </div>
                                            <div>
                                                <a className="bg-transparent  p-0" id="my-anchor-element-id">
                                                    <button onClick={() => handelDelete(user._id)} className="btn hover:bg-slate-400  bg-[#ea4744]">
                                                        < MdDelete className="  text-white md:text-xl"></MdDelete>
                                                    </button>
                                                </a>
                                                <Tooltip
                                                    anchorSelect="#my-anchor-element-id"
                                                    content="Delete"
                                                />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Mylist;
