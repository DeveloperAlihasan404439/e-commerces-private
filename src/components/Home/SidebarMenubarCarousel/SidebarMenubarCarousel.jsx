import Link from "next/link";
import "./SidebarMenubarCarousel.css";
import { FaChevronRight } from "react-icons/fa";
function SidebarMenubarCarousel() {
  /* const [openDropdown, setOpenDropdown] = useState(null);
  const handleDropdownClick = (title) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };
  <GroupSidebarMenubar
    title="Health"
    isOpen={openDropdown === "Health"}
    onClick={() => handleDropdownClick("Health")}
  />; */

  return (
    <ul className="space-y-1 font-medium relative px-5 py-2.5">
      <li className="text-black px-2 py-2 text-[16px] font-bold  truncate transition duration-150  hover:bg-[#395BEF] hover:text-white dark:text-white w-full flex gap-3  cursor-pointer items-center rounded bg-gray-50">
        <Link href="/electronics">Electronics</Link>
      </li>
      <li className="group text-black px-2 py-2 text-[16px] font-bold truncate transition duration-150  hover:bg-[#395BEF] hover:text-white dark:text-white w-full flex gap-3 justify-between cursor-pointer  items-center rounded bg-gray-50">
        <Link href="/electronics">Fashion</Link>
        <span className="icon">
          <FaChevronRight />
        </span>
        <div className="group_nav px-2 py-2.5">
          <ul className="space-y-1">
            <li className="text-black px-2 py-2 text-[16px] font-bold truncate transition duration-150  hover:bg-[#395BEF] hover:text-white dark:text-white w-full flex gap-3  cursor-pointer items-center rounded bg-gray-50">
              <Link href="/electronics">Toys</Link>
            </li>
            <li className="text-black px-2 py-2 text-[16px] font-bold truncate transition duration-150  hover:bg-[#395BEF] hover:text-white dark:text-white w-full flex gap-3  cursor-pointer items-center rounded bg-gray-50">
              <Link href="/electronics">Shoes</Link>
            </li>
            <li className="text-black px-2 py-2 text-[16px] font-bold truncate transition duration-150  hover:bg-[#395BEF] hover:text-white dark:text-white w-full flex gap-3  cursor-pointer items-center rounded bg-gray-50">
              <Link href="/electronics">Sports</Link>
            </li>

            <li className="text-black px-2 py-2 text-[16px] font-bold truncate transition duration-150  hover:bg-[#395BEF] hover:text-white dark:text-white w-full flex gap-3  cursor-pointer items-center rounded bg-gray-50">
              <Link href="/electronics">Toys</Link>
            </li>
            <li className="text-black px-2 py-2 text-[16px] font-bold truncate transition duration-150  hover:bg-[#395BEF] hover:text-white dark:text-white w-full flex gap-3  cursor-pointer items-center rounded bg-gray-50">
              <Link href="/electronics">Shoes</Link>
            </li>
            <li className="text-black px-2 py-2 text-[16px] font-bold truncate transition duration-150  hover:bg-[#395BEF] hover:text-white dark:text-white w-full flex gap-3  cursor-pointer items-center rounded bg-gray-50">
              <Link href="/electronics">Sports</Link>
            </li>

            <li className="text-black px-2 py-2 text-[16px] font-bold truncate transition duration-150  hover:bg-[#395BEF] hover:text-white dark:text-white w-full flex gap-3  cursor-pointer items-center rounded bg-gray-50">
              <Link href="/electronics">Medial</Link>
            </li>
          </ul>
        </div>
      </li>
      <li className="text-black px-2 py-2 text-[16px] font-bold truncate transition duration-150  hover:bg-[#395BEF] hover:text-white dark:text-white w-full flex gap-3  cursor-pointer items-center rounded bg-gray-50">
        <Link href="/electronics">Toys</Link>
      </li>
      <li className="text-black px-2 py-2 text-[16px] font-bold truncate transition duration-150  hover:bg-[#395BEF] hover:text-white dark:text-white w-full flex gap-3  cursor-pointer items-center rounded bg-gray-50">
        <Link href="/electronics">Shoes</Link>
      </li>
      <li className="group text-black px-2 py-2 text-[16px] font-bold truncate transition duration-150  hover:bg-[#395BEF] hover:text-white dark:text-white w-full justify-between flex gap-3  cursor-pointer  items-center rounded bg-gray-50">
        <Link href="/electronics">Sports</Link>
      </li>

      <li className="text-black px-2 py-2 text-[16px] font-bold truncate transition duration-150  hover:bg-[#395BEF] hover:text-white dark:text-white w-full flex gap-3  cursor-pointer items-center rounded bg-gray-50">
        <Link href="/electronics">Medial</Link>
      </li>
    </ul>
  );
}

export default SidebarMenubarCarousel;
