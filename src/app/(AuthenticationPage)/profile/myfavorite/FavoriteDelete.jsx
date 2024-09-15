'use client'

import { useState } from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";

function FavoriteDelete() {
    const [favoriteDelete, setFavoriteDelete] = useState(false)
  return (
    <div>
      <p onClick={()=> setFavoriteDelete(!favoriteDelete)} className="py-1 px-2 rounded bg-red-500 text-white cursor-pointer">
        <RiDeleteBin2Fill />
      </p>
      {favoriteDelete && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div
            className="bg-white rounded shadow-lg p-6 transform transition-transform duration-300 w-11/12 md:w-8/12 lg:w-5/12 xl:w-5/12 space-y-4"
            style={{ animation: "slideDown 0.3s forwards" }}
          >
            <h2>Are you sure you want to delete this item?</h2>

            <div className="flex justify-start pt-4">
              <button
                // onClick={handleSetData}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Delete
              </button>
              <button
                onClick={() => setFavoriteDelete(false)}
                className="px-4 py-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 ml-3"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FavoriteDelete;
