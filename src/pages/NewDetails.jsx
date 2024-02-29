import { Link } from "react-router-dom";

const NewDetails = () => {
  return (
    <div className="flex items-center justify-between flex-col w-screen h-screen">
      <div className="h-14 w-full">
        <div className=" flex justify-between items-center ">
          <div className="flex mt-3 ml-4 ">
            <img
              src="/image/Secto.png"
              alt="404"
              className="w-[40px] md:w-[50px] lg:w-[100px] "
            />
            <h2 className="text-[20px] md:text-[35px]">SpinTrack</h2>
          </div>
          <p className="text-slate-400 text-lg md:text-[25px] text-center flex-1  ">
            New History
          </p>
          <h3 className="pr-5 text-xl text-[#091F40] underline">Rohit</h3>
        </div>
      </div>
      <div className="flex-1 flex flex-col md:flex-row mt-16 items-center justify-center w-full h-full  ">
        <div className="mt-10 md:mt-0 md:mb-20">
          <img
            src="/image/main.png"
            alt="404"
            className=" w-[130px] md:w-[170px] lg:w-[200px] 2xl:w-[260px] 3xl:w-[300px]"
          />
        </div>
        <div className=" p-4 h-full flex items-center justify-center flex-col gap-10">
          <div className="3xl:gap-8 flex h-full  flex-col items-center justify-center gap-4 ">
            <div className="w-[340px] h-[250px]  md:w-[450px] md:h-[80%] lg:w-[550px] xl:w-[700px] 3xl:w-[900px] bg-[#F3F4F4] shadow-lg"></div>
          </div>
          <div className=" flex justify-between items-start w-[340px]  md:w-[400px] pb-4 ">
            <Link
              to="/new"
              className="border-[#091f40] border-2 rounded-lg  p-1.5 text-[#091f40] text-xl px-16 bg-white "
            >
              Prev
            </Link>
            <Link
              to="/thankyou"
              className="bg-[#091f40]  p-1.5 text-white rounded-lg px-16 text-xl"
            >
              Next
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#F7F7F7] w-full h-14 flex items-center justify-center text-[20px] italic">
        Tracking with Precision.Repairing to Perfection
      </div>
    </div>
  );
};

export default NewDetails;
