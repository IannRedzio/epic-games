import React from "react";
import {
  RiMoneyDollarCircleLine,
  RiFacebookLine,
  RiYoutubeLine,
  RiInstagramLine,
  RiTwitterLine,
  RiFilter3Line,
  RiCloseLine,
} from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="w-80 h-full overflow-y-scroll text-gray-400">
      {/* categorias search */}
      <div className="bg-[#362C29] rounded-xl p-4">
        <h4 className="mb-6">Categorias</h4>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="indy" />
            <label htmlFor="indy">Indie</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="adventure" />
            <label htmlFor="adventure">Adventure</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="mmo" />
            <label htmlFor="mmo">MMO</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="casual" />
            <label htmlFor="casual">Casual Game</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="strategy" />
            <label htmlFor="strategy">Strategy</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="simulator" />
            <label htmlFor="simulator">Simulator</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="sports" />
            <label htmlFor="sports">Sports Game</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="action" />
            <label htmlFor="action">Action Game</label>
          </div>
        </div>
        <h4 className="my-6">Platforms</h4>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="pc" />
            <label htmlFor="pc">PC</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="play5" />
            <label htmlFor="play5">PlayStation 5</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="play4" />
            <label htmlFor="play4">PlayStation 4</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="xbox" />
            <label htmlFor="xbox">Xbox Series</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="nintendo" />
            <label htmlFor="nintendo">Nintendo Switch</label>
          </div>
        </div>
        <h4 className="my-6">Price</h4>
        <form>
          <div className="relative">
            <RiMoneyDollarCircleLine className="absolute left-2 top-1/2 -translate-y-1/2" />
            <input
              type="number"
              className="bg-[#181A20] py-2 pl-8 pr-4 rounded-xl outline-none w-full"
            />
          </div>
        </form>
      </div>
      {/* social media */}
      <div></div>
    </div>
  );
};

export default Sidebar;
