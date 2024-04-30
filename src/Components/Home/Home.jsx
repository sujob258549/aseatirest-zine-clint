import SixtorestPlese from "../Addtoristspost/SixtorestPlese";
import Country from "./Country";
import Progerss from "./Progerss";
import Slider from "./Slider";


const Home = () => {
    return (
        <div className="w-[90%] mx-auto">
            <div className=" py-8 md:py-20">
                <Slider></Slider>
            </div>

            <SixtorestPlese></SixtorestPlese> 
            <Country></Country>
            <Progerss></Progerss>

        </div>
    );
};

export default Home;