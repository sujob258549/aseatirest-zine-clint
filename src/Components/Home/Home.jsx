import SixtorestPlese from "../Addtoristspost/SixtorestPlese";
import Country from "./Country";
import Extrasection2 from "./Extrasection2";
import Progerss from "./Progerss";
import Slider from "./Slider";


const Home = () => {
    return (
        <div>
            <div className="w-[90%] mx-auto">
                <div className=" py-8 md:py-20">
                    <Slider></Slider>
                </div>

                <SixtorestPlese></SixtorestPlese>
                <Country></Country>
                <Progerss></Progerss>



            </div>
            <Extrasection2></Extrasection2>
        </div>

    );
};

export default Home;