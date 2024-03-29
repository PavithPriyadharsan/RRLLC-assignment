

function Footer(props) {
  return (
    <div className="flex justify-center items-center px-16 py-12 ml-3 bg-gray-800 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between mt-2.5 mb-28 max-w-full w-[843px] max-md:flex-wrap max-md:mb-10">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[72%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-sm leading-5 whitespace-nowrap text-stone-300 max-md:mt-10">
                <div className="text-base leading-6 text-white uppercase">
                  Categories
                </div>
                <div className="mt-6 hover:text-orange-500 cursor-pointer">Web Builder</div>
                <div className="mt-8 hover:text-orange-500 cursor-pointer">Hosting</div>
                <div className="mt-7 text-sm leading-5 hover:text-orange-500 cursor-pointer">Data Center</div>
                <div className="mt-8 hover:text-orange-500 cursor-pointer">Robotic-Automation</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-sm leading-5 whitespace-nowrap text-stone-300 max-md:mt-10">
                <div className="text-base leading-6 text-white uppercase">
                  Contact
                </div>
                <div className="mt-5 hover:text-orange-500 cursor-pointer">Contact</div>
                <div className="mt-7 hover:text-orange-500 cursor-pointer">Privacy Policy</div>
                <div className="mt-6 hover:text-orange-500 cursor-pointer">Terms Of Service</div>
                <div className="mt-7 text-sm leading-5 hover:text-orange-500 cursor-pointer">Categories</div>
                <div className="mt-6 hover:text-orange-500 cursor-pointer">About</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2.5 my-auto text-sm leading-5 text-gray-300 whitespace-nowrap">
          <div className="grow hover:text-orange-500 cursor-pointer">United States</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5d4989adb1e01645ec8844ce6ebf1735133f75f7971cfd4aaebec4b52f6c25b?apiKey=ab56a40f808742ffa3e884a879342a93&"
            className="self-start aspect-[1.67] w-[15px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
