import { Play } from "lucide-react";
import { Link } from "react-router-dom";

const MainDashboard = () => {
  return (
    <div className="flex items-center justify-between flex-col w-screen h-screen">
      <div className="h-14 w-full">
        <div className=" flex justify-between items-center ">
          <div className="flex mt-3 ml-4 ">
            <img
              src="/image/Secto.png"
              alt="404"
              className="w-[40px] md:w-[50px] lg:w-[100px] 2xl:w-[140px] "
            />
            <h2 className="text-[20px] md:text-[30px] 2xl:text-[55px]">
              SpinTrack
            </h2>
          </div>
          <h3 className="pr-5 text-xl 2xl:text-[25px] text-[#091F40] underline">
            Rohit
          </h3>
        </div>
      </div>
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center w-full h-full">
        <div className="mt-10 md:mt-0 md:mb-20">
          <img
            src="/image/main.png"
            alt="404"
            className=" w-[130px] md:w-[170px] lg:w-[200px] xl:w-[250px] 2xl:w-[300px] 3xl:w-[280px]"
          />
        </div>
        <div className="p-4 h-full flex items-center justify-center flex-col gap-10 ">
          <div className="flex items-end justify-center w-full h-full gap-4  2xl:pr-[500px] 3xl:gap-8">
            <div className=" w-[140px] h-[120px]  md:w-[200px] md:h-[190px] 2xl:w-[280px] 2xl:h-[260px] 3xl:w-[350px] bg-[#F7F7F7] rounded shadow flex items-center justify-center">
              New order
            </div>
            <Link
              to="/order"
              className=" w-[140px] h-[120px] md:w-[200px] md:h-[190px] 2xl:w-[280px] 2xl:h-[260px] 3xl:w-[350px] bg-[#F7F7F7] shadow rounded flex items-center justify-center"
            >
              Order History
            </Link>
          </div>
          <div className="flex items-start justify-start h-[400px] w-full ">
            <div className=" space-y-4">
              <div className="flex gap-2 ">
                <Play size={30} />
                <p className="text-xl">Raise Complaints</p>
              </div>
              <div className="flex gap-2">
                <Play size={30} />
                <p className="text-xl">Quick Action 1 </p>
              </div>
              <div className="flex gap-2">
                <Play size={30} />
                <p className="text-xl">Quick Action 2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F7F7F7] w-full h-14 flex items-center justify-center text-[20px] italic">
        Tracking with Precision.Repairing to Perfection
      </div>
    </div>
  );
};

export default MainDashboard;
