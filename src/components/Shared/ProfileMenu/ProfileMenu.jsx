"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function ProfileMenu() {
  const pathname = usePathname()


  return (
    <div className="p-5 border rounded w-full">
      <ul className="space-y-1">
        <li>
          <Link
            href="/profile"
            className={`py-2.5 px-3 block rounded cursor-pointer font-semibold ${
              pathname === "/profile"
                ? "bg-[#395BEF] text-white"
                : "bg-white hover:bg-[#395BEF] hover:text-white"
            }`}
          >
            My Details
          </Link>
        </li>
        <li>
          <Link
            href="/profile/profiledetails"
            className={`py-2.5 px-3 block rounded cursor-pointer font-semibold ${
              pathname === "/profile/profiledetails"
                ? "bg-[#395BEF] text-white"
                : "bg-white hover:bg-[#395BEF] hover:text-white"
            }`}
          >
            My Address Book
          </Link>
        </li>
        <li>
          <Link
            href="/profile/myfavorite"
            className={`py-2.5 px-3 block rounded cursor-pointer font-semibold ${
              pathname === "/profile/myfavorite"
                ? "bg-[#395BEF] text-white"
                : "bg-white hover:bg-[#395BEF] hover:text-white"
            }`}
          >
            My Favorite
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ProfileMenu;
