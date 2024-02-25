

function SignUp(props) {
  return (
    <div className="self-end py-12 pr-5 pl-2.5 mt-9 max-w-full bg-gray-50 w-[1052px]">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="text-3xl leading-10 text-gray-500 max-md:mt-10">
            Sign up and get exclusive special deals
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex gap-0 text-sm tracking-wider leading-5 text-center text-white whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div className="max-w-full bg-white rounded-xl h-[52px] w-[348px]" />
            <div className="justify-center px-5 py-5 bg-blue-500 hover:bg-blue-600 cursor-pointer rounded-md max-md:px-5">
              Sign Up
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
