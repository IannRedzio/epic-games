import React from "react";
import { RiShoppingCartLine, RiHeart2Line } from "react-icons/ri";

const Header = () => {
  return (
    <header className=" h-[10vh] text-gray-300 p-4 px-10 flex items-center justify-between bg-[#181A20] z-40">
      {/* menu */}
      <ul className="flex items-center gap-6">
        <li>
          <a href="#" className="hover:text-[#E58D27] transition-colors">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#E58D27] transition-colors">
            Streams
          </a>
        </li>
        <li>
          <a href="#" className="text-[#E58D27] transition-colors">
            Game Store
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#E58D27] transition-colors">
            News
          </a>
        </li>
      </ul>
      {/* user menu */}
      <ul className="flex items-center gap-6 text-lg">
        <li>
          <button className="hover:text-[#E58D27] transition-colors">
            <RiShoppingCartLine />
          </button>
        </li>
        <li>
          <button className="hover:text-[#E58D27] transition-colors">
            <RiHeart2Line />
          </button>
        </li>
        <li>
          <button>
            <img
              src="https://img.freepik.com/foto-gratis/joven-confiado_1098-20868.jpg?w=740&t=st=1668129569~exp=1668130169~hmac=5dfeee1fb8493a630276444d408bb6e048df42dc3c7237c0fd42c764d6c5cbf7"
              alt="avatarF"
              className="w-8 h-8 object-cover rounded-full ring-2 ring-[#E58D27]"
            />
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
