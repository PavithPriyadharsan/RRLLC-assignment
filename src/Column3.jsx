

function Column3(props) {
  return (
    <div className="px-9 pb-3 bg-white rounded-xl border border-solid border-black border-opacity-0 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md: shadow-xl pr-2">
        <div className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-center self-stretch my-auto text-sm leading-5 text-center text-gray-500 whitespace-nowrap max-md:mt-10">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c54dfb8f509f33c6f0f70d605bce432ba91ab754a6c72cdad01d3fa6a40fa599?apiKey=ab56a40f808742ffa3e884a879342a93&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c54dfb8f509f33c6f0f70d605bce432ba91ab754a6c72cdad01d3fa6a40fa599?apiKey=ab56a40f808742ffa3e884a879342a93&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c54dfb8f509f33c6f0f70d605bce432ba91ab754a6c72cdad01d3fa6a40fa599?apiKey=ab56a40f808742ffa3e884a879342a93&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c54dfb8f509f33c6f0f70d605bce432ba91ab754a6c72cdad01d3fa6a40fa599?apiKey=ab56a40f808742ffa3e884a879342a93&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c54dfb8f509f33c6f0f70d605bce432ba91ab754a6c72cdad01d3fa6a40fa599?apiKey=ab56a40f808742ffa3e884a879342a93&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c54dfb8f509f33c6f0f70d605bce432ba91ab754a6c72cdad01d3fa6a40fa599?apiKey=ab56a40f808742ffa3e884a879342a93&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c54dfb8f509f33c6f0f70d605bce432ba91ab754a6c72cdad01d3fa6a40fa599?apiKey=ab56a40f808742ffa3e884a879342a93&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c54dfb8f509f33c6f0f70d605bce432ba91ab754a6c72cdad01d3fa6a40fa599?apiKey=ab56a40f808742ffa3e884a879342a93&"
              className="aspect-[1.43] w-[147px]"
            />
            <div className="mt-4">Builder 1</div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow mt-7 text-base leading-6 text-gray-600 max-md:mt-10 max-md:max-w-full">
            <div className="max-md:max-w-full">
              <span className="font-bold">
                WixPro 72-Inch Responsive Website Builder
              </span>
              - Comprehensive Digital Platform Creation Tool, Streamlined Design
              Interface for Professional Websites and Online Stores (Black/Blue)
            </div>
            <div className="mt-3.5 font-bold leading-[150%] text-slate-700 max-md:max-w-full">
              Main highlights
            </div>
            <div className="self-start mt-4 ml-5 max-md:max-w-full">
              [What You Get]: Receive the WixPro website builder suite, access
              to premium design templates, an extensive library of widgets and
              apps, and detailed step-by-step guides.
            </div>
            <div className="mt-8 text-blue-500 leading-[150%] max-md:max-w-full hover:text-sky-500 cursor-pointer">
              Show more
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col whitespace-nowrap max-md:mt-6">
            <div className="flex flex-col items-center self-center px-8 py-5 max-w-full text-sky-800 bg-sky-50 rounded-none w-[145px] max-md:px-5">
              <div className="text-3xl leading-10">9.3</div>
              <div className="self-stretch mt-6 text-sm leading-5">
                Exceptional
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/62af5d46e79744366108c30cc8adc0f06c419316e254bcb96fffb0c8505dc381?apiKey=ab56a40f808742ffa3e884a879342a93&"
                className="mt-2.5 w-full aspect-[7.69]"
              />
            </div>
            <div className="justify-center items-center px-16 py-5 mt-20 text-base leading-6 text-center text-white bg-blue-500 hover:bg-blue-600 cursor-pointer rounded-xl max-md:px-5 max-md:mt-10">
              View
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Column3;