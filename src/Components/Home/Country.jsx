import { Link } from "react-router-dom";


const Country = () => {
    return (
        <div>
            <h2 className="text-3xl md:text-5xl md:mt-10 font-bold text-center">Countries Section</h2>
            <div className="py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="rounded-md p-5 min-h-80 flex flex-col shadow">
                    <figure><img className="rounded-md w-full h-[200px]" src="https://assets-news.housing.com/news/wp-content/uploads/2022/08/18174406/bangladesh-places-to-visit-FEATURE-compressed.jpg" alt="Shoes" /></figure>
                    <div className="">
                        <h2 className="card-title pt-5 pb-2">Bangladesh</h2>
                        <p>Bangladesh, to the east of India on the Bay of Bengal, is a South Asian country marked by lush greenery and many waterways. Its Padma (Ganges), Meghna  of India on the Bay  and Jamuna r.</p>
                        <div className="card-actions justify-end mt-10 flex-grow">
                            <Link to={'/country'} className="btn text-white hover:text-black bg-[#400f0fd9]">Other torest sport</Link>
                        </div>
                    </div>
                </div>
                <div className="rounded-md shadow p-5">
                    <figure><img className="rounded-md w-full h-[200px]" src="https://ihplb.b-cdn.net/wp-content/uploads/2020/10/Krabi-750x430.jpg" alt="Shoes" /></figure>
                    <div className="">
                        <h2 className="card-title pt-5 pb-2">Thailand</h2>
                        <p>Be it shrines, pagodas, or  of India on the Bay  of India on the Bay  temples,  Mai, Wat Phra Kaew in Bangkok, Wat Ratburana in Ayutthaya, and the White Temple in Chiang Rai, among others.</p>
                        <div className="card-actions justify-end mt-10 flex-grow">
                            <Link to={'/thailand'} className="btn text-white hover:text-black bg-[#400f0fd9]">Other torest sport</Link>
                        </div>
                    </div>
                </div>
                <div className="rounded-md p-5 min-h-80 flex flex-col shadow">
                    <figure><img className="rounded-md w-full h-[200px]" src="https://static.javatpoint.com/tourist-places/images/tourist-places-in-indonesia2.png" alt="Shoes" /></figure>
                    <div className="">
                        <h2 className="card-title pt-5 pb-2">Indonesia</h2>
                        <p>Indonesia is known for its diverse  temples and museums. You can visit Mount Rinjani, Kuta Beach, Campuhan Ridge Walk, Sanur Beach, Saraswati, Borobudur temples, and much more.</p>
                        <div className="card-actions justify-end mt-10">
                            <Link to={'/indonesia'} className="btn text-white hover:text-black bg-[#400f0fd9]">Other torest sport</Link>
                        </div>
                    </div>
                </div>
                <div className="rounded-md px-5 pt-5 shadow">
                    <figure><img className="rounded-md w-full h-[200px]" src="https://miro.medium.com/v2/resize:fit:1200/1*syoDOUMMfMPkVl_uwinHug.jpeg" alt="Shoes" /></figure>
                    <div className="">
                        <h2 className="card-title pt-5 pb-2">Malaysia</h2>
                        <p>Malaysia is a Southeast Asian country home to colonial buildings, busy shopping districts such as Bukit Bintang and skyscrapers such as the iconic, 451m-tall Petronas Twin Towers. ― Google</p>
                        <div className="card-actions justify-end mt-10">
                            <Link to={'/malaysia'} className="btn text-white hover:text-black bg-[#400f0fd9]">Other torest sport</Link>
                        </div>
                    </div>
                </div>
                <div className="rounded-md p-5 min-h-80 flex flex-col shadow">
                    <figure><img className="rounded-md w-full h-[200px]" src="https://www.tourmyindia.com/blog//wp-content/uploads/2018/02/Cat-Ba-Island.jpg" alt="Shoes" /></figure>
                    <div className="">
                        <h2 className="card-title pt-5 pb-2">Vietnam</h2>
                        <p>Vietnam is a Southeast Asian (formerly Saigon) has French colonial landmarks, plus Vietnamese War history museums and the Củ Chi tunnels, used by Viet Cong soldiers. ― Google</p>
                        <div className="card-actions justify-end mt-10">
                            <Link to={'/vietname'} className="btn text-white hover:text-black bg-[#400f0fd9]">Other torest sport</Link>
                        </div>
                    </div>
                </div>
                <div className="rounded-md shadow pb-5 px-5 pt-5 ">
                    <figure><img className="rounded-md w-full h-[200px]" src="https://i.ytimg.com/vi/bCO3czGo0-E/maxresdefault.jpg" alt="Shoes" /></figure>
                    <div className="">
                        <h2 className="card-title pt-5 pb-2">Cambodia</h2>
                        <p>Cambodia is also famous for  Cambodia has a significant French-colonial architectural legacy and plenty of attractions for tourists hoping to discover this beautiful countrys secrets.Dec 6, 2022.</p>
                        <div className="card-actions justify-end mt-10 flex-grow">
                            <Link to={'/cambodia'} className="btn text-white hover:text-black bg-[#400f0fd9]">Other torest sport</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Country;