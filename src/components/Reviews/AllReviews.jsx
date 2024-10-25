import React from "react";
import ReviewsAdded from "./ReviewsAdded";

function AllReviews() {
  return (
    <section className="py-8 antialiased bg-white md:py-5 my-5 rounded">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="flex justify-between items-center flex-wrap space-y-4 md:space-y-0">
          <div className="flex items-center flex-wrap gap-2">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Reviews
            </h2>
            <div className="md:mt-2 flex items-center flex-wrap gap-2">
              <div className="flex items-center gap-0.5">
                <svg
                  className="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
                <svg
                  className="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
                <svg
                  className="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
                <svg
                  className="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
                <svg
                  className="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
              </div>
              <div className="flex items-center gap-4">
                <p className="font-medium leading-none text-gray-500 dark:text-gray-400">
                  (4.6)
                </p>
                <a
                  href="#"
                  className="font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
                >
                  {" "}
                  645 Reviews{" "}
                </a>
              </div>
            </div>
          </div>

          <ReviewsAdded />
        </div>

        <div className="my-6 gap-8 sm:flex items-center md:my-8 h-full">
          <div className="shrink-0 flex flex-col ">
            <p className="text-2xl font-semibold leading-none text-gray-900 dark:text-white">
              4.65
            </p>

            <div className="flex items-center gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-4 w-4 shrink-0 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
              ))}
            </div>
          </div>

          <div className="mt-6 flex-1 space-y-3 sm:mt-0">
            <div className="flex items-center gap-2">
              <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">
                5
              </p>

              <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
                <div className="h-1.5 rounded-full bg-yellow-300 w-64 md:w-72"></div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">
                4
              </p>

              <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
                <div className="h-1.5 rounded-full bg-yellow-300 w-56 md:w-64"></div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">
                3
              </p>
              <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
                <div className="h-1.5 rounded-full bg-yellow-300 w-48 md:w-56"></div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">
                2
              </p>
              <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
                <div className="h-1.5 rounded-full bg-yellow-300 w-40 md:w-48"></div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">
                1
              </p>
              <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
                <div className="h-1.5 rounded-full bg-yellow-300 w-32 md:w-40"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 divide-y divide-gray-200 dark:divide-gray-700">
          <div className="gap-3 pb-6 sm:flex sm:items-start ">
            <div className="shrink-0 space-y-2 sm:w-48 md:w-72 ">
              <div className="space-y-0.5">
                <div className="flex items-center gap-3">
                  <h2 className="w-10 h-10 rounded-full bg-blue-500 text-white text-xl font-bold uppercase flex items-center justify-center">
                    M
                  </h2>

                  <p className="text-base font-semibold text-gray-900 dark:text-white">
                    Micheal Gough
                  </p>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-4 w-4 shrink-0 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    18 November 2023
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 min-w-0 flex-1 space-y-4 sm:mt-0">
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                My old IMAC was from 2013. This replacement was well needed.
                Very fast, and the colour matches my office set up perfectly.
                The display is out of this world and I’m very happy with this
                purchase.
              </p>

              <div className="flex items-center gap-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Was it helpful to you?
                </p>
              </div>
            </div>
          </div>

          <div className="gap-3 py-6 sm:flex sm:items-start">
            <div className="shrink-0 space-y-2 sm:w-48 md:w-72">
              <div className="space-y-0.5">
                <div className="flex items-center gap-3">
                  <h2 className="w-10 h-10 rounded-full bg-blue-500 text-white text-xl font-bold uppercase flex items-center justify-center">
                    J
                  </h2>

                  <p className="text-base font-semibold text-gray-900 dark:text-white">
                    Jese Leos
                  </p>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-4 w-4 shrink-0 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="font-normal text-gray-500 dark:text-gray-400">
                    18 November 2023
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 min-w-0 flex-1 space-y-4 sm:mt-0">
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                It’s fancy, amazing keyboard, matching accessories. Super fast,
                batteries last more than usual, everything runs perfect in this
                computer. Highly recommend!
              </p>

              <div className="flex items-center gap-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Was it helpful to you?
                </p>
              </div>
            </div>
          </div>

          <div className="gap-3 py-6 sm:flex sm:items-start">
            <div className="shrink-0 space-y-2 sm:w-48 md:w-72">
              <div className="space-y-0.5">
                <div className="flex items-center gap-3">
                  <h2 className="w-10 h-10 rounded-full bg-blue-500 text-white text-xl font-bold uppercase flex items-center justify-center">
                    B
                  </h2>

                  <p className="text-base font-semibold text-gray-900 dark:text-white">
                    Bonnie Green
                  </p>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-4 w-4 shrink-0 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="font-normal text-gray-500 dark:text-gray-400">
                    18 November 2023
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 min-w-0 flex-1 space-y-4 sm:mt-0">
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                My old IMAC was from 2013. This replacement was well needed.
                Very fast, and the colour matches my office set up perfectly.
                The display is out of this world and I’m very happy with this
                purchase.
              </p>

              <div className="flex items-center gap-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Was it helpful to you?
                </p>
              </div>
            </div>
          </div>

          <div className="gap-3 py-6 sm:flex sm:items-start">
            <div className="shrink-0 space-y-2 sm:w-48 md:w-72">
              <div className="space-y-0.5">
                <div className="flex items-center gap-3">
                  <h2 className="w-10 h-10 rounded-full bg-blue-500 text-white text-xl font-bold uppercase flex items-center justify-center">
                    R
                  </h2>

                  <p className="text-base font-semibold text-gray-900 dark:text-white">
                    Roberta Casas
                  </p>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-4 w-4 shrink-0 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="font-normal text-gray-500 dark:text-gray-400">
                    18 November 2023
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 min-w-0 flex-1 space-y-4 sm:mt-0">
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                I have used earlier Mac computers in my university work for a
                number of years and found them easy to use.The iMac 2021 is no
                exception. It works straight out of the box giving superb
                definition from the HD screen.
              </p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Basic tools such as a browser (Safari) and a mail client are
                included in the system. Microsoft Office apps can be downloaded
                from the App Store though they may only work in read-only mode
                unless you take out a subscription. The instruction manual that
                comes with it is the size of a piece of toilet paper but the
                proper user guide is on-line.
              </p>

              <div className="flex items-center gap-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Was it helpful to you?
                </p>
              </div>
            </div>
          </div>

          <div className="gap-3 py-6 sm:flex sm:items-start">
            <div className="shrink-0 space-y-2 sm:w-48 md:w-72">
              <div className="space-y-0.5">
                <div className="flex items-center gap-3">
                  <h2 className="w-10 h-10 rounded-full bg-blue-500 text-white text-xl font-bold uppercase flex items-center justify-center">
                    N
                  </h2>

                  <p className="text-base font-semibold text-gray-900 dark:text-white">
                    Neil Sims
                  </p>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-4 w-4 shrink-0 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="font-normal text-gray-500 dark:text-gray-400">
                    18 November 2023
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 min-w-0 flex-1 space-y-4 sm:mt-0">
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                I replaced my 11 year old iMac with the new M1 Apple. I wanted
                to remain with Apple as my old one is still working perfectly
                and all Apple products are so reliable. Setting up was simple
                and fast and transferring everything from my previous iMac
                worked perfectly.
              </p>

              <div className="flex items-center gap-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Was it helpful to you?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AllReviews;
