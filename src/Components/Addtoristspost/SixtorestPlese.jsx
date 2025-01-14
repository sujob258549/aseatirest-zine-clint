import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { TbDeviceIpadStar } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";



const SixtorestPlese = () => {

    const [torestZones, setTorestZones] = useState([])
    console.log(torestZones)

    useEffect(() => {
        fetch('https://asea-ture-zone-10.vercel.app/torestplase')
            .then(res => res.json())
            .then(data => {
                setTorestZones(data)
            })

    }, [])


    return (
        <div className="py-10 md:py-16 lg:py-20">
            <h2 className="3text-xl md:text-5xl text-center font-bold">
            <Typewriter
                        loop
                        cursor
                        cursorStyle='...'
                        delaySpeed={100}
                        deleteSpeed={100}
                        typeSpeed={100}
                        autoStart= {true}
                        words={['Tourists Spots section']}
                    
                />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 md:py-16 ">
            {
                    torestZones.slice(0, 6).map(torestZone => (
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



export default SixtorestPlese;