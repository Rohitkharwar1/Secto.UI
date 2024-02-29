import { Link } from "react-router-dom"; // Import Link from React Router

const SetcoSpinTrack = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      <div className="flex flex-col items-center  justify-center w-full ">
        <div className="fixed top-20 flex items-center justify-center left-0 md:left-[15%] lg:left-[32%] xl:left-[26%] 2xl:left-[28%] 3xl:left-[35%]">
          <img src="/image/Secto.png" alt="404" className="relative " />
          <p className="text-[55px]">SpinTrack</p>
        </div>
        <div className="flex items-start justify-center flex-col bg-gray-100 w-full md:w-[715px] h-[250px] space-y-3 p-4 rounded-2xl shadow-2xl relative">
          <p className="text-center  text-xl sm:text-2xl italic w-[50%] absolute top-[-90px]">
            Tracking with Precision <br /> Repairing to Perfection
          </p>
          {/* Use Link to navigate to register page */}
          <Link
            to="/register"
            className="bg-white border-2 border-[#091F40] w-[60%] p-2 text-[#091f40] text-xl rounded-xl md:w-[50%]"
          >
            Register
          </Link>
          {/* Use Link to navigate to login page */}
          <Link
            to="/login"
            className="bg-[#091f40] w-[60%] p-2 text-white rounded-xl text-xl md:w-[50%]"
          >
            Login
          </Link>
          <img
            src="/image/main.png"
            alt="main"
            className="absolute right-5 md:right-0 w-[150px] md:w-[300px] "
          />
        </div>
      </div>
    </div>
  );
};

export default SetcoSpinTrack;
