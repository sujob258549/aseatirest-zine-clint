import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { TbDeviceIpadStar } from "react-icons/tb";
import { Link } from "react-router-dom";


const Country = () => {

    const [alldata, setalldata] = useState([])
    const [bangladesh , setbangladesh] = useState([]);
    const [thailand , setthailand] = useState([]);
    const [indonatia , setindonatia] = useState([]);
    const [malaysia , setmalaysia] = useState([]);
    const [veatname , setveatname] = useState([]);
    const [conbodia , setconbodia] = useState([]);

    useEffect(() => {
        fetch('https://asea-ture-zone-10.vercel.app/torestplase')
            .then(res => res.json())
                .then(data => {
                    setalldata(data)
                })
 }, [])

 useEffect(() => {
    const singleData = alldata.filter(data => data.countryname.toLowerCase() === 'bangladesh');
    setbangladesh(singleData);
}, [alldata]);
 useEffect(() => {
    const singleData = alldata.filter(data => data.countryname.toLowerCase() === 'tailand');
    setthailand(singleData);
}, [alldata]);
 useEffect(() => {
    const singleData = alldata.filter(data => data.countryname.toLowerCase() === 'indonesia');
    setindonatia(singleData);
}, [alldata]);
 useEffect(() => {
    const singleData = alldata.filter(data => data.countryname.toLowerCase() === 'malaysia');
    setmalaysia(singleData);
}, [alldata]);
useEffect(() => {
    const singleData = alldata.filter(data => data.countryname.toLowerCase() === 'cambodia');
    setveatname(singleData);
}, [alldata]);

 useEffect(() => {
    const singleData = alldata.filter(data => data.countryname.toLowerCase() === 'vietnam');
    setconbodia(singleData);
}, [alldata]);


    return (
        <div>
            <h2 className="text-3xl md:text-5xl md:mt-10 font-bold text-center">Countries Section</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 md:py-16 ">
            {
                    bangladesh.slice(0,1).map(torestZone => (
                        <div data-aos="fade-down" data-aos-duration="5000" key={torestZone.id} className='border-2 transition p-5
                     shadow  rounded-md hover'>

                            <h2 className='text-xl px-5 font-semibold'>{torestZone.estate_title}</h2>
                            <img className=' w-full h-56 hover:transform hover:scale-110 duration-500 hover:rotate-6' src={torestZone.photourl} alt="" />
                            <div className="py-5">
                                <p className='px-5'><span className="font-bold">Compani Name : </span> {torestZone.countryname}</p>
                                <p className=' px-5 py-2'><span className="font-bold">Average cost: </span> {torestZone.average_cost}</p>
                                <p className=' px-5 py-2'><span className="font-bold">Seasonality: </span> {torestZone.seasonality}</p>
                                <p className=' px-5 py-2'><span className="font-bold">Discribtion: </span> {torestZone.textArea.slice(0, 40)}</p>

                            </div>
                            <hr />
                            <div className='flex justify-end py-8 px-5'>
                                <div className='flex gap-3'>



                                </div>
                                <div className=' items-center flex gap-2'>
                                    <FaLocationDot className='text-xl '> </FaLocationDot>
                                    <p>{torestZone.location}</p>
                                </div>
                            </div>
                            <div className="flex justify-end mr-5">
                                <Link to={'/country'}  className="btn w-40   text-right text-white bg-[#400f0fd9] flex items-center hover:text-black"><TbDeviceIpadStar className="text-xl font-bold"></TbDeviceIpadStar>Other torest</Link>
                            </div>
                            
                        </div>
                    ))
                }
            {
                    thailand.slice(0,1).map(torestZone => (
                        <div data-aos="fade-down" data-aos-duration="5000" key={torestZone.id} className='border-2 transition p-5
                     shadow  rounded-md hover'>

                            <h2 className='text-xl px-5 font-semibold'>{torestZone.estate_title}</h2>
                            <img className=' w-full h-56 hover:transform hover:scale-110 duration-500 hover:rotate-6' src={torestZone.photourl} alt="" />
                            <div className="py-5">
                                <p className='px-5'><span className="font-bold">Compani Name : </span> {torestZone.countryname}</p>
                                <p className=' px-5 py-2'><span className="font-bold">Average cost: </span> {torestZone.average_cost}</p>
                                <p className=' px-5 py-2'><span className="font-bold">Seasonality: </span> {torestZone.seasonality}</p>
                                <p className=' px-5 py-2'><span className="font-bold">Discribtion: </span> {torestZone.textArea.slice(0, 40)}</p>

                            </div>
                            <hr />
                            <div className='flex justify-end py-8 px-5'>
                                <div className='flex gap-3'>



                                </div>
                                <div className=' items-center flex gap-2'>
                                    <FaLocationDot className='text-xl '> </FaLocationDot>
                                    <p>{torestZone.location}</p>
                                </div>
                            </div>
                            <div className="flex justify-end mr-5">
                                <Link to={'/thailand'}  className="btn w-40   text-right text-white bg-[#400f0fd9] flex items-center hover:text-black"><TbDeviceIpadStar className="text-xl font-bold"></TbDeviceIpadStar>Other torest</Link>
                            </div>
                            
                        </div>
                    ))
                }
            {
                    indonatia.slice(0,1).map(torestZone => (
                        <div data-aos="fade-down" data-aos-duration="5000" key={torestZone.id} className='border-2 transition p-5
                     shadow  rounded-md hover'>

                            <h2 className='text-xl px-5 font-semibold'>{torestZone.estate_title}</h2>
                            <img className=' w-full h-56 hover:transform hover:scale-110 duration-500 hover:rotate-6' src={torestZone.photourl} alt="" />
                            <div className="py-5">
                                <p className='px-5'><span className="font-bold">Compani Name : </span> {torestZone.countryname}</p>
                                <p className=' px-5 py-2'><span className="font-bold">Average cost: </span> {torestZone.average_cost}</p>
                                <p className=' px-5 py-2'><span className="font-bold">Seasonality: </span> {torestZone.seasonality}</p>
                                <p className=' px-5 py-2'><span className="font-bold">Discribtion: </span> {torestZone.textArea.slice(0, 40)}</p>

                            </div>
                            <hr />
                            <div className='flex justify-end py-8 px-5'>
                                <div className='flex gap-3'>



                                </div>
                                <div className=' items-center flex gap-2'>
                                    <FaLocationDot className='text-xl '> </FaLocationDot>
                                    <p>{torestZone.location}</p>
                                </div>
                            </div>
                            <div className="flex justify-end mr-5">
                                <Link to={'/indonesia'}  className="btn w-40   text-right text-white bg-[#400f0fd9] flex items-center hover:text-black"><TbDeviceIpadStar className="text-xl font-bold"></TbDeviceIpadStar>Other torest</Link>
                            </div>
                            
                        </div>
                    ))
                }
            {
                    malaysia.slice(0,1).map(torestZone => (
                        <div data-aos="fade-down" data-aos-duration="5000" key={torestZone.id} className='border-2 transition p-5
                     shadow  rounded-md hover'>

                            <h2 className='text-xl px-5 font-semibold'>{torestZone.estate_title}</h2>
                            <img className=' w-full h-56 hover:transform hover:scale-110 duration-500 hover:rotate-6' src={torestZone.photourl} alt="" />
                            <div className="py-5">
                                <p className='px-5'><span className="font-bold">Compani Name : </span> {torestZone.countryname}</p>
                                <p className=' px-5 py-2'><span className="font-bold">Average cost: </span> {torestZone.average_cost}</p>
                                <p className=' px-5 py-2'><span className="font-bold">Seasonality: </span> {torestZone.seasonality}</p>
                                <p className=' px-5 py-2'><span className="font-bold">Discribtion: </span> {torestZone.textArea.slice(0, 40)}</p>

                            </div>
                            <hr />
                            <div className='flex justify-end py-8 px-5'>
                                <div className='flex gap-3'>



                                </div>
                                <div className=' items-center flex gap-2'>
                                    <FaLocationDot className='text-xl '> </FaLocationDot>
                                    <p>{torestZone.location}</p>
                                </div>
                            </div>
                            <div className="flex justify-end mr-5">
                                <Link to={'/malaysia'}  className="btn w-40   text-right text-white bg-[#400f0fd9] flex items-center hover:text-black"><TbDeviceIpadStar className="text-xl font-bold"></TbDeviceIpadStar>Other torest</Link>
                            </div>
                            
                        </div>
                    ))
                }
            {
                    veatname.slice(0,1).map(torestZone => (
                        <div data-aos="fade-down" data-aos-duration="5000" key={torestZone.id} className='border-2 transition p-5
                     shadow  rounded-md hover'>

                            <h2 className='text-xl px-5 font-semibold'>{torestZone.estate_title}</h2>
                            <img className=' w-full h-56 hover:transform hover:scale-110 duration-500 hover:rotate-6' src={torestZone.photourl} alt="" />
                            <div className="py-5">
                                <p className='px-5'><span className="font-bold">Compani Name : </span> {torestZone.countryname}</p>
                                <p className=' px-5 py-2'><span className="font-bold">Average cost: </span> {torestZone.average_cost}</p>
                                <p className=' px-5 py-2'><span className="font-bold">Seasonality: </span> {torestZone.seasonality}</p>
                                <p className=' px-5 py-2'><span className="font-bold">Discribtion: </span> {torestZone.textArea.slice(0, 40)}</p>

                            </div>
                            <hr />
                            <div className='flex justify-end py-8 px-5'>
                                <div className='flex gap-3'>



                                </div>
                                <div className=' items-center flex gap-2'>
                                    <FaLocationDot className='text-xl '> </FaLocationDot>
                                    <p>{torestZone.location}</p>
                                </div>
                            </div>
                            <div className="flex justify-end mr-5">
                                <Link to={'/vietname'}  className="btn w-40   text-right text-white bg-[#400f0fd9] flex items-center hover:text-black"><TbDeviceIpadStar className="text-xl font-bold"></TbDeviceIpadStar>Other torest</Link>
                            </div>
                            
                        </div>
                    ))
                }
            {
                    conbodia.slice(0,1).map(torestZone => (
                        <div data-aos="fade-down" data-aos-duration="5000" key={torestZone.id} className='border-2 transition p-5
                     shadow  rounded-md hover'>

                            <h2 className='text-xl px-5 font-semibold'>{torestZone.estate_title}</h2>
                            <img className=' w-full h-56 hover:transform hover:scale-110 duration-500 hover:rotate-6' src={torestZone.photourl} alt="" />
                            <div className="py-5">
                                <p className='px-5'><span className="font-bold">Compani Name : </span> {torestZone.countryname}</p>
                                <p className=' px-5 py-2'><span className="font-bold">Average cost: </span> {torestZone.average_cost}</p>
                                <p className=' px-5 py-2'><span className="font-bold">Seasonality: </span> {torestZone.seasonality}</p>
                                <p className=' px-5 py-2'><span className="font-bold">Discribtion: </span> {torestZone.textArea.slice(0, 40)}</p>

                            </div>
                            <hr />
                            <div className='flex justify-end py-8 px-5'>
                                <div className='flex gap-3'>



                                </div>
                                <div className=' items-center flex gap-2'>
                                    <FaLocationDot className='text-xl '> </FaLocationDot>
                                    <p>{torestZone.location}</p>
                                </div>
                            </div>
                            <div className="flex justify-end mr-5">
                                <Link to={'/cambodia'} className="btn w-40   text-right text-white bg-[#400f0fd9] flex items-center hover:text-black"><TbDeviceIpadStar className="text-xl font-bold"></TbDeviceIpadStar>Other torest</Link>
                            </div>
                            
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Country;