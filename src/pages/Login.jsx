const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      <div className="flex flex-col items-center  justify-center w-full ">
        <div className="fixed top-20 flex items-center justify-center left-0 md:left-[15%] lg:left-[32%] xl:left-[26%] 2xl:left-[28%] 3xl:left-[35%]">
          <img src="/image/Secto.png" alt="404" className="relative " />
          <p className="text-[55px]">SpinTrack</p>
        </div>
        <div className="flex items-start justify-center flex-col bg-gray-100 w-full md:w-[715px]  h-[250px] lg:w-[750px] lg:h-[360px] space-y-3 p-4 rounded-2xl shadow-2xl relative">
          <p className="text-center  text-xl sm:text-2xl italic w-[50%] absolute top-[-90px]">
            Tracking with Precision <br /> Repairing to Perfection
          </p>
          <form
            className="flex items-start space-y-4 justify-center flex-col w-full"
            action=""
          >
            <div className="w-full">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 ml-4"
              >
                User Id
              </label>
              <div className=" ">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-[60%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 md:w-[55%]"
                />
              </div>
            </div>
            <div className="w-full ">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900 ml-4 md:w-[55%]"
                >
                  Password
                </label>
                <div className="w-full ml-10">
                  <a
                    href="#"
                    className="font-semibold text-indigo-400 text-[12px] hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className=" ">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-[60%] rounded-md border-0 py-1.5   text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 md:w-[55%]"
                />
              </div>
            </div>

            <button className="bg-[#091f40] w-[60%] p-1.5  text-white rounded-xl text-xl md:w-[55%]">
              Login
            </button>
          </form>
          <img
            src="/image/main.png"
            alt="main"
            className="absolute right-2 md:right-0 w-[150px] md:w-[300px] "
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
