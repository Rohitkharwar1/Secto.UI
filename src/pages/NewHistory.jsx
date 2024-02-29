import { Link } from "react-router-dom";

const NewHistory = () => {
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
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center w-full h-full">
        <div className="mt-10 md:mt-0 md:mb-20">
          <img
            src="/image/main.png"
            alt="404"
            className=" w-[130px] md:w-[170px] lg:w-[200px] 2xl:w-[260px]"
          />
        </div>
        <div className="p-4 h-full flex items-center justify-center flex-col gap-10">
          <div className=" flex h-full w-full flex-col items-center justify-center gap-4 2xl:pr-[500px] 3xl:gap-8">
            <div className="flex flex-col items-start justify-center gap-4 ">
              <p className="text-left ">Name of the Company</p>
              <input
                className="h-10 w-[400px] md:w-[470px]  xl:w-[600px] flex-1 bg-white border-b "
                placeholder="Enter your message"
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-4 ">
              <p className="text-left ">Name of The contact Person</p>
              <input
                className="h-10 w-[400px] md:w-[470px] xl:w-[600px] flex-1 bg-white border-b "
                placeholder="Enter your message"
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-4 ">
              <p className="text-left ">Form field1</p>
              <input
                className="h-10 w-[400px] md:w-[470px] xl:w-[600px] flex-1 bg-white border-b "
                placeholder="Enter your message"
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-4 ">
              <p className="text-left ">Form field2</p>
              <input
                className="h-10 w-[400px] md:w-[470px] xl:w-[600px] flex-1 bg-white border-b "
                placeholder="Enter your message"
              />
            </div>
          </div>
          <Link
            to="/newdetails"
            className="border-[#091f40] border-2 rounded-lg  p-1.5 text-[#091f40] text-xl px-16 bg-white "
          >
            Next
          </Link>
        </div>
      </div>
      <div className="bg-[#F7F7F7] w-full h-14 flex items-center justify-center text-[20px] italic">
        Tracking with Precision.Repairing to Perfection
      </div>
    </div>
  );
};

export default NewHistory;
