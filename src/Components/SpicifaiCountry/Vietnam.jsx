import  { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { TbDeviceIpadStar } from "react-icons/tb";
import { Link, useLoaderData } from "react-router-dom";

const Vietnam = () => {
    const tailandDatas = useLoaderData();
    const [filterDatas, setFilterData] = useState([]); 
    console.log(filterDatas)

    useEffect(() => {
        const singleData = tailandDatas.filter(data => data.countryname.toLowerCase() === 'vietnam');
        console.log(singleData)
        setFilterData(singleData);
    }, [tailandDatas]);

    return (
        <div className="py-10 md:py-16 lg:py-20 w-[90%] mx-auto">
            <h2 className="3text-xl md:text-5xl text-center font-bold">Tourists Spots section </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 md:py-16 ">
                {
                    filterDatas.map(torestZone => (
                        <div data-aos="fade-down" data-aos-duration="5000" key={torestZone.id} className='border-2 transition p-5
                     shadow  rounded-md hover'>

                            <h2 className='text-xl px-5 font-semibold'>{torestZone.estate_title}</h2>
                            <img className=' w-full  hover:transform hover:scale-110 duration-500 hover:rotate-6 h-56 rounded-md h-56 h-48' src={torestZone.photourl} alt="" />
                            <div className="py-5">
                                <p className='px-5'><span className="font-bold">Compani Name : </span> {torestZone.countryname}</p>
                                <p className=' px-5 py-2'><span className="font-bold">Average cost: </span> {torestZone.average_cost}</p>
                                <p className=' px-5 py-2'><span className="font-bold">Seasonality: </span> {torestZone.seasonality}</p>
                                <p className=' px-5 py-2'><span className="font-bold">Country Name: </span> {torestZone.countryname}</p>
                                <p className=' px-5 py-2'><span className="font-bold">Discribtion: </span> {torestZone.textArea}</p>

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
                                <Link to={`/detail/${torestZone._id}`} className="btn w-40   text-right text-white bg-[#400f0fd9] flex items-center hover:text-black"><TbDeviceIpadStar className="text-xl font-bold"></TbDeviceIpadStar> Vew detail</Link>
                            </div>
                            
                        </div>
                    ))
                }
            </div>
           <div className="flex justify-center"> <Link to={`/alltorestaport`} className="btn w-40   text-right text-white bg-[#400f0fd9] flex items-center hover:text-black"><TbDeviceIpadStar className="text-xl font-bold"></TbDeviceIpadStar> Vew detail</Link></div>
        </div>
    );
};

export default Vietnam;
