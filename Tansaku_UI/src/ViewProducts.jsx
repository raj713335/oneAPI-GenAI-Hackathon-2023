import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import WRIST_WATCH_IMAGE from "@/assets/products/wrist-watches.jpg";
import Api from "@/Api/Api.jsx";

export default function ViewProducts() {

  return (
    <Fragment>
      <div className="mx-16 my-16">
        <h1 className="text-3xl">Product Category</h1>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mt-6">
          <span className="text-sm font-semibold">1-16 of 26 Products</span>
          <button className="relative text-sm focus:outline-none group mt-4 sm:mt-0">
            <div className="flex items-center justify-between w-40 h-10 px-3 border-2 border-gray-300 rounded hover:bg-gray-300">
              <span className="font-medium">Popular</span>
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="absolute z-10 flex-col items-start hidden w-full pb-1 bg-white shadow-lg rounded group-focus:flex">
              <a
                className="w-full px-4 py-2 text-left hover:bg-gray-100"
                href="#"
              >
                Popular
              </a>
              <a
                className="w-full px-4 py-2 text-left hover:bg-gray-100"
                href="#"
              >
                Featured
              </a>
              <a
                className="w-full px-4 py-2 text-left hover:bg-gray-100"
                href="#"
              >
                Newest
              </a>
              <a
                className="w-full px-4 py-2 text-left hover:bg-gray-100"
                href="#"
              >
                Lowest Price
              </a>
              <a
                className="w-full px-4 py-2 text-left hover:bg-gray-100"
                href="#"
              >
                Highest Price
              </a>
            </div>
          </button>
        </div>
        <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 w-full mt-6">
          <div className="py-2 px-4 bg-white border shadow hover:shadow-md rounded-lg cursor-pointer">
            <a href="#" className=""></a>
            <img src={WRIST_WATCH_IMAGE} alt="product-image" />
            <div className="flex items-center justify-between mt-3">
              <div>
                <a href="#" className="font-medium">
                  Product Name
                </a>
                <a className="flex items-center" href="#">
                  <span className="text-xs font-medium text-gray-600">by</span>
                  <span className="text-xs font-medium ml-1 text-gray-500">
                    Store Name
                  </span>
                </a>
              </div>
              <span className="flex items-center h-8 bg-gray-100 text-gray-600 text-sm px-2 rounded">
                Rs. 34
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10 space-x-1">
          <button className="flex items-center justify-center h-8 w-8 rounded text-gray-400">
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            className="flex items-center justify-center h-8 px-2 rounded text-sm font-medium text-gray-400"
            disabled
          >
            Prev
          </button>
          <button
            className="flex items-center justify-center h-8 w-8 rounded bg-gray-100 text-sm font-medium text-gray-600"
            disabled
          >
            1
          </button>
          <button className="flex items-center justify-center h-8 w-8 rounded hover:bg-gray-100 text-sm font-medium text-gray-600 hover:text-gray-600">
            2
          </button>
          <button className="flex items-center justify-center h-8 w-8 rounded hover:bg-gray-100 text-sm font-medium text-gray-600 hover:text-gray-600">
            3
          </button>
          <button className="flex items-center justify-center h-8 px-2 rounded hover:bg-gray-100 text-sm font-medium text-gray-600 hover:text-gray-600">
            Next
          </button>
          <button className="flex items-center justify-center h-8 w-8 rounded hover:bg-gray-100 text-gray-600 hover:text-gray-600">
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </Fragment>
  );
}
