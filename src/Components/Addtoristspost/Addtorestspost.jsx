import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { CreatAuthContext } from './../Firebase/AuthContext';


const Addtorestspost = () => {

    const {user} = useContext(CreatAuthContext)
    const navigate = useNavigate()
    const handelSubmitCofi = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const Touristsspotname = e.target.Touristsspotname.value;
        const countryname = e.target.countryname.value;
        const location = e.target.location.value;
        const average_cost = e.target.average_cost.value;
        const seasonality = e.target.seasonality.value;
        const treveltime = e.target.treveltime.value;
        const totavisitorsperyear = e.target.totavisitorsperyear.value;
        const photourl = e.target.photourl.value;
        const textArea = e.target.text_area.value;
        const torestSport = { name, email,Touristsspotname, countryname, location,average_cost,seasonality,treveltime,totavisitorsperyear,photourl,textArea }
        console.log(torestSport)

        fetch('http://localhost:3000/torestplase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(torestSport)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Success...",
                        text: "user coffee create success",
                        footer: '<a href="/">You add  success</a>'
                    });
                    navigate('/');

                }
            })

    }
    return (
        <div>
            <div className="w-[90%] mx-auto">

                <div className="bg-[#F4F3F0] rounded-md mb-10 p-5 md:p-10 mt-10">
                    <div className=" w-full md:w-[70%] mx-auto text-center pb-10 ">
                        <h1 className="text-5xl text-center text-[#374151] font-rancho">Add Tusest Zones</h1>
                        <p className="pt-5">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    </div>
                    <div >
                        <form onSubmit={handelSubmitCofi} className="">
                            <div className="form-control">
                                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5 mt-5">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">User Name</span>
                                        </label>
                                        <input type="text" defaultValue={user?.displayName} name="name" placeholder="User Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">User Email</span>
                                        </label>
                                        <input type="text" defaultValue={user.email} name="email" placeholder="Enter User Email" className="input input-bordered" required />
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5 mt-5">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Tourists spot name</span>
                                        </label>
                                        <input type="text" name="Touristsspotname" placeholder="tourists_spot_name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">country_Name</span>
                                        </label>
                                        <input type="text" name="countryname" placeholder="Enter country_Name" className="input input-bordered" required />
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5 mt-5">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">location</span>
                                        </label>
                                        <input type="text" name="location" placeholder="Enter location" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Average cost</span>
                                        </label>
                                        <input type="text" name="average_cost" placeholder="Enter Average_cost" className="input input-bordered" />
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5 mt-5">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Seasonality - like summer, winter</span>
                                        </label>
                                        <input type="text" name="seasonality" placeholder="Enter easonality - like summer, winter" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Travel time </span>
                                        </label>
                                        <input type="text" name="treveltime" placeholder="Inter travel_time " className="input input-bordered" required />
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5 mt-5">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">TotaVisitorsPerYear </span>
                                        </label>
                                        <input type="text" name="totavisitorsperyear" placeholder="Enter easonality - like summer, winter" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo URL</span>
                                        </label>
                                        <input type="text" name="photourl" placeholder="Cofi photo url" className="input input-bordered" required />
                                    </div>
                                </div>
                              <div className="mt-5">
                              <label htmlFor="">short description</label><br />
                                <textarea className=" textarea h-32 mt-5 w-full" name="text_area" placeholder="short description"></textarea>

                              </div>
                            </div>
                            <button className="btn text-[#331A15] text-2xl font-rancho btn-outline  mt-5 w-full text-center bg-[#D2B48C]">Add Zones</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Addtorestspost;