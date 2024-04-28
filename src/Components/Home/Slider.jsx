
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css'

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import { CiCircleMore } from 'react-icons/ci';


const Slider = () => {
    return (
        <div className='mt-5'>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                autoplay={{ delay: 3000 }}
                modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide className='slider6 py-9 md:py-36'>
                    <div className=' w-full px-5 md:px-10 md:w-[70%] mx-auto text-center'>
                        <h2 className='text-3xl md:text-5xl font-bold text-white'>Coxbajar soykot</h2>
                        <p className='py-10 text-white'>The most famous destination in Cox's Bazar is Cox's Bazar Beach. It is usually known as the longest natural beach in the world (150 KM). The speciality of this beach is, despite its length, the beach is entirely sandy, and hardly will you find muddy areas over there. The largest fishing port in the country and the submarine cable landing station are around this place. You will find many tourist spots, hotels/ resorts & Burmese markets nearby, making the beaches the best Cox's Bazar tourist spot. </p>
                        <button className='btn hover:text-black text-white bg-[#400f0fd9] hover:bg-slate-400'> <CiCircleMore className='text-2xl'></CiCircleMore > More...</button>
                    </div>

                </SwiperSlide>
                <SwiperSlide className='slider7 py-[78px] md:py-[180px]'>
                    <div className=''>
                        <div className=' w-full px-5 md:px-10 md:w-[70%] mx-auto text-center'>
                            <h2 className='text-3xl md:text-5xl font-bold text-white'>Things to Do in Bangkok</h2>
                            <p style={{ textShadow: "1px 1px 10px #fff" }} className='py-10 text-white'>Kick off with a food tour for the best markets and eats. Next must-do: Chatuchak Weekend Market. Then explore famous temples like Wat Pho, known for its Reclining Buddha. For personalized recommendations, try our AI trip-planning product.</p>
                            <button className='btn hover:text-black text-white bg-[#400f0fd9] hover:bg-slate-400'> <CiCircleMore className='text-2xl'></CiCircleMore > More...</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slider5 py-[103px] md:py-48'>
                    <div className=' w-full px-5 md:px-10 md:w-[70%] mx-auto text-center '>
                        <h2 className='text-3xl text-white md:text-5xl font-bold '>Borobudur </h2>
                        <p className='py-8 text-white  '>Borobudur is a 9th-century Buddhist monument in Indonesia. It’s actually the largest Buddhist temple in the world! The ancient complex comprises six square platforms topped by three circular platforms decorated with 2,672 relief panels and 504 Buddha statues.m</p>
                        <button className='btn hover:text-black text-white bg-[#400f0fd9] hover:bg-slate-400'> <CiCircleMore className='text-2xl'></CiCircleMore > More...</button>
                    </div>
                </SwiperSlide>


                <SwiperSlide className='slider4 py-[22px] md:py-36'>
                    <div className='w-full px-5 md:px-10 md:w-[70%] mx-auto text-center'>
                        <h2 className='text-3xl md:text-5xl font-bold text-white'>Saint Martin</h2>
                        <p className='py-10 text-white'>Great Tour for history and nature lovers. Explore the natural beauty of Chittagong city and the nearby sea beach and river.

                            Chittagong is the second largest city in Bangladesh. It is known as the Commercial Capital of Bangladesh. It has a rich British heritage and Muslim culture and is full of natural beauty, including rivers, the sea and green hills. We provide a Guided Tour of Chittagong City for Day-long. Hotel pickup and drop-off, and private transportation are included in the tour plans. </p>
                        <button className='btn hover:text-black text-white bg-[#400f0fd9] hover:bg-slate-400'> <CiCircleMore className='text-2xl'></CiCircleMore > More...</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slider1 py-[46px] md:py-40'>
                    <div className='w-full px-5 md:px-10 md:w-[70%] mx-auto text-center'>
                        <h2 className='text-3xl text-black md:text-5xl font-bold md:text-white'>Rangamati</h2>
                        <p className='py-10 text-white'>Rangamati is the administrative headquarter and town of Rangamati Hill District in the Chittagong Hill Tracts of Bangladesh. The town is located at 22°37'60N 92°12'0E and has an altitude of 14 metres. It is also where Ropuiliani, a Mizo chieftess, was jailed and died, during British rule in a dresser, a refrigerator, and other kitchen facilities, upholstered chairs, a flat-screen televisrger, higher-priced hotels may provide additional</p>
                        <button className='btn hover:text-black text-white bg-[#400f0fd9] hover:bg-slate-400'> <CiCircleMore className='text-2xl'></CiCircleMore > More...</button>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide className='slider5'>Slide 5</SwiperSlide>
                <SwiperSlide className='slider6'>Slide 6</SwiperSlide>
                <SwiperSlide className='slider7'>Slide 7</SwiperSlide>
                <SwiperSlide className='slider8'>Slide 8</SwiperSlide> */}

            </Swiper>
        </div>
    );
};

export default Slider;