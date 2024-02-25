import { IoSearchOutline } from "react-icons/io5";

function Navbar(props) {
  return (
    <div className="flex justify-center items-center px-16 py-3.5 bg-gray-800 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between ml-14 max-w-full w-[754px] max-md:flex-wrap">
        <div className="flex flex-row justify-center items-start bg-white py-1 px-2 rounded-lg">
        <div className="flex py-1 pr-1"><IoSearchOutline /></div>
        <div className="flex"><input type="text" /></div>
        </div>
        <div className="flex gap-12 justify-between my-auto text-sm leading-5 text-gray-300">
          <div className="hover:text-orange-500 cursor-pointer">Categories</div>
          <div className="flex-auto hover:text-orange-500 cursor-pointer">Website Builders</div>
          <div className="flex-auto hover:text-orange-500 cursor-pointer">Today's deals</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
