import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaTwitter, FaYoutube } from "react-icons/fa6";

import bkash from "../../../images/payment/bkash.png";
import ngod from "../../../images/payment/ngod.png";
import rocket from "../../../images/payment/rocket.png";
import visa from "../../../images/payment/visa.png";
import cashon from "../../../images/payment/cashon.png";
import Image from "next/image";
function Footer() {
  return (
    <div className="border-t-2 mt-5">
      <footer className="bg-black">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-6">
            <div className="md:col-span-2">
              <h2 className="mb-6 font-semibold text-white uppercase ">
                Address
              </h2>
              <div className="space-y-1">
                <h3 className="text-white text-sm block font-medium">
                  Office 301,Al musalla Road, Dubai, U.A.E.
                </h3>
                <h3 className="text-white text-sm block font-medium">
                  Phone : +8801783228430
                </h3>
                <h3 className="text-white text-sm block font-medium">
                  Email : enq@mygsm.me
                </h3>
              </div>
            </div>
            <div>
              <h2 className="mb-6 font-semibold text-white uppercase">
                Help Center
              </h2>
              <ul className="text-white space-y-1 text-sm font-medium">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 font-semibold text-white uppercase ">
                Legal
              </h2>
              <ul className="text-white space-y-1 text-sm font-medium">
                <li>
                  <a href="/privacy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/paymentmethods">Payment Methods</a>
                </li>
                {/* <li>
                  <a href="#">Licensing</a>
                </li> */}
                <li>
                  <a href="/termsconditions">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Newsletter
              </h2>

              <div className="relative w-full">
                <input
                  type="search"
                  id="location-search"
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-s-gray-50 border-s-2 border border-gray-300 "
                  placeholder="Email address"
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 focus:outline-none"
                >
                  Subscribe
                </button>
              </div>
              <div className="flex items-center gap-1 flex-wrap mt-3">
                <Image
                  width={300}
                  height={300}
                  src={bkash}
                  alt="bkash"
                  className="w-20 h-10 rounded"
                />
                <Image
                  width={300}
                  height={300}
                  src={ngod}
                  alt="ngod"
                  className="w-20 h-10 rounded"
                />
                <Image
                  width={300}
                  height={300}
                  src={rocket}
                  alt="rocket"
                  className="w-20 h-10 rounded"
                />
                <Image
                  width={300}
                  height={300}
                  src={visa}
                  alt="visa"
                  className="w-20 h-10 rounded"
                />
                <Image
                  width={300}
                  height={300}
                  src={cashon}
                  alt="cash"
                  className="w-20 h-10 rounded"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[90%] mx-auto px-4 pb-6 md:flex md:items-center md:justify-between">
          <span className="text-sm text-white sm:text-center">
            Copyright© 2024-2035 flip.mart.ME
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse text-white">
            <Link href="#">
              <FaFacebookF />
            </Link>
            <Link href="#">
              <FaYoutube />
            </Link>
            <Link href="#">
              <FaLinkedinIn />
            </Link>
            <Link href="#">
              <FaTwitter />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
