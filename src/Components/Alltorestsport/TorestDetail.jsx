import { useLoaderData } from "react-router-dom";


const TorestDetail = () => {

    const detailTorest = useLoaderData()
    console.log(detailTorest)
    return (
      <div className="w-[90%] mx-auto">
          <div className=" grid grid-cols-1 items-center md:grid-cols-2 py-10 gap-10">
            <div className="">
                <div className="bg-slate-200 p-5 rounded-lg">
                    <figure><img className="w-full" src={detailTorest.photourl} alt="Shoes" /></figure>
                </div>
            </div>

            <div className=" gap-0">
                <h2 className="font-rancho text-2xl playfair py-2 font-semibold"><span>Country name :</span> {detailTorest.countryname}</h2>
                <hr />

                <div className=" flex gap-4 py-3 items-center">

                    <div className="">
                        <h2 className=" text-[16px]  font-medium rounded-full py-2 md:py-3"> <span className=" lg:pr-16 pr-10 font-semibold">Name </span > -: {detailTorest.name}</h2>
                        <h2 className=" text-[16px]  font-medium rounded-full py-2 md:py-3"> <span className=" lg:pr-16 pr-10 font-semibold">Tourist spots Name </span > -: {detailTorest.Touristsspotname}</h2>
                        <h2 className="text-[16px]  Color font-medium   rounded-full py-2 md:py-3"> <span className="font-semibold pr-3 lg:pr-[70px]">Email </span> -: {detailTorest.email}</h2>
                        <h2 className=" text-[16px]  tColor  font-medium   rounded-full py-2 md:py-3"> <span className="font-semibold lg:pr-3 pr-[6px]">Average cost </span>-: {detailTorest.average_cost}</h2>

                        <h2 className=" text-[16px]  tColor  font-medium  rounded-full py-2 md:py-3"> <span className="font-semibold lg:pr-10 pr-10">Seasonality  </span>-: {detailTorest.seasonality}</h2>
                        <h2 className=" text-[16px]  tColor  font-medium  rounded-full py-2 md:py-3"> <span className="font-semibold lg:pr-2 pr-9">Total visitor speryear  </span>-: {detailTorest.totavisitorsperyear}</h2>
                        <h2 className=" text-[16px]  tColor  rounded-full py-2 md:py-3"> <span className="lg:pr-2 font-semibold pr-9">Short Description</span>-: <span className="">{detailTorest.textArea}</span></h2>

                    </div>
                </div>
            </div>
        </div>
      </div>
    );
};

export default TorestDetail;