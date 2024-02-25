

function Hero(props) {
  return (
    <div className="flex flex-col px-7 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col pt-12 pb-2.5 ml-3 bg-gray-50 max-md:max-w-full">
        <div className="text-5xl text-slate-700 max-md:max-w-full max-md:text-4xl">
          Best Website builders in the US
        </div>
        <div className="shrink-0 mt-6 h-px bg-zinc-200 max-md:max-w-full" />
        <div className="flex gap-5 justify-between items-start mt-2.5 w-full text-sm leading-5 max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-0.5 mt-1.5 text-gray-600 max-md:flex-wrap max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/44c2b31f6f63e2adfc5de5ab18d8fb1554b6c8bcd36d0c1fe3091566c2a4ffa1?apiKey=ab56a40f808742ffa3e884a879342a93&"
              className="w-5 aspect-square"
            />
            <div>Last Updated</div>
            <div className="my-auto">-</div>
            <div className="flex-auto text-sm leading-5">February 22, 2020</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/33d3213079efdce9cee37800c05e3e006d1d2c0076c5e8328ee1a81932daf13d?apiKey=ab56a40f808742ffa3e884a879342a93&"
              className="w-5 ml-3.5 aspect-square"
            />
            <div className="grow whitespace-nowrap">Advertising Disclosure</div>
          </div>
          <div className="flex gap-1.5 text-center text-gray-500 whitespace-nowrap hover:text-orange-500 cursor-pointer">
            <div className="grow">Top Relevant</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5e182ca72f86d5b7c0ff998726dfa8cc2ad82f819199d3e2bc74b4ea1bad1e9?apiKey=ab56a40f808742ffa3e884a879342a93&"
              className="w-6 aspect-square"
            />
          </div>
        </div>
      </div>
      <div className="ml-3 max-w-full h-px bg-zinc-200 w-[1023px]" />
      <div className="flex gap-5 justify-between pr-20 mt-4 text-sm leading-5 text-gray-600 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <div className="grow justify-center py-3.5 pr-14 pl-4 text-sm leading-5 whitespace-nowrap bg-white rounded-xl max-md:pr-5 hover:text-orange-500 cursor-pointer">
          Tools
        </div>
        <div className="grow justify-center py-3.5 pr-12 pl-4 bg-white rounded-xl max-md:pr-5 hover:text-orange-500 cursor-pointer">
          AWS Builder
        </div>
        <div className="grow justify-center px-4 py-3.5 whitespace-nowrap bg-white rounded-xl max-md:pr-5 hover:text-orange-500 cursor-pointer">
          Start Build
        </div>
        <div className="grow justify-center py-3 pr-8 pl-4 whitespace-nowrap bg-white rounded-xl max-md:pr-5 hover:text-orange-500 cursor-pointer">
          Build Supplies
        </div>
        <div className="grow justify-center items-start py-3 pr-16 pl-4 text-sm leading-5 whitespace-nowrap bg-white rounded-xl max-md:pr-5 hover:text-orange-500 cursor-pointer">
          Tooling
        </div>
        <div className="grow justify-center py-3 pr-14 pl-4 whitespace-nowrap bg-white rounded-xl max-md:pr-5 hover:text-orange-500 cursor-pointer">
          BlueHosting
        </div>
      </div>
      <div className="flex gap-2.5 items-center self-start mt-5 text-sm leading-5 text-gray-500 max-md:flex-wrap max-md:max-w-full">
        <div className="self-stretch my-auto text-sm leading-5 text-gray-500 hover:text-orange-500 cursor-pointer">
          Home
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/22dba1a57915cd7bfe181eb93e776ce2caedc04c95e1d64a961f066c8d3e498b?apiKey=ab56a40f808742ffa3e884a879342a93&"
          className="self-stretch my-auto w-2.5 aspect-[1.25] fill-gray-500"
        />
        <div className="self-stretch hover:text-orange-500 cursor-pointer">Hosting for all</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/22dba1a57915cd7bfe181eb93e776ce2caedc04c95e1d64a961f066c8d3e498b?apiKey=ab56a40f808742ffa3e884a879342a93&"
          className="self-stretch my-auto w-2.5 aspect-[1.25] fill-gray-500"
        />
        <div className="self-stretch text-gray-500 hover:text-orange-500 cursor-pointer">Hosting</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/22dba1a57915cd7bfe181eb93e776ce2caedc04c95e1d64a961f066c8d3e498b?apiKey=ab56a40f808742ffa3e884a879342a93&"
          className="self-stretch my-auto w-2.5 aspect-[1.25] fill-gray-500"
        />
        <div className="self-stretch hover:text-orange-500 cursor-pointer">Hosting6</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/22dba1a57915cd7bfe181eb93e776ce2caedc04c95e1d64a961f066c8d3e498b?apiKey=ab56a40f808742ffa3e884a879342a93&"
          className="self-stretch my-auto w-2.5 aspect-[1.25] fill-gray-500"
        />
        <div className="grow self-stretch text-orange-500">Hosting5</div>
      </div>
    </div>
  );
}


export default Hero;