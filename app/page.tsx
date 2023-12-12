
import { useState, useEffect, useRef } from "react";
export default function Home() {

  return(
    <div className="bg-[#0e0909] w-full md:max-w-md mx-auto min-h-screen">
        <div className="flex justify-between items-center p-5 border-b border-gray-700">
          <span className="text-xl font-['Inter'] text-white">
              Cart <span className="text-[#767373]">2</span>
          </span>
          <button className="flex items-center text-sm font-['Inter'] text-[#bdaeae]">
            continue shopping
            <img
              src="https://file.rendit.io/n/5Y6XcqZWUG8ht6qzWPtO.svg"
              className="ml-2"
            />
          </button>
        </div>

        <div className="p-4 space-y-5">

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <span className="text-sm font-['Inter'] text-[#b3ffb1] bg-[#17904f] pt-1 px-1">
                  COURSE
                </span>
                <span className="text-sm font-['Inter'] text-[#ffafaf] bg-[#7b0707] pt-1 px-1">
                  SALE
                </span>
              </div>
              <span className="text-sm font-['Inter'] text-white">
                $14.99 USD
              </span>
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <p className="font-['Inter'] text-white">
                  Street Photography with Phone: Color
                </p>
                <p className="text-sm font-['Inter'] text-[#adabab]">
                  A course by Jack
                </p>
              </div>
              
              <img
                src="https://file.rendit.io/n/IA5rN6JJBuraYWzaoYur.png"
                className="w-24 h-auto object-cover"
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-start">
              <span className="text-sm font-['Inter'] text-[#d2afff] bg-[#5016af] pt-1 px-2">
                BOOK
              </span>
              <span className="text-sm font-['Inter'] text-white">
                $14.99 USD
              </span>
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <p className="font-['Inter'] text-white">
                  SWIFTUI For Designer. An Introduction to Xcode
                </p>
                <p className="text-sm font-['Inter'] text-[#adabab]">
                  A Book by Anie Watson
                </p>
              </div>
              
              <img
                src="https://file.rendit.io/n/rCTflQLqmbllespgF0HE.png"
                className="w-24 h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#2d2e2e] flex justify-between items-center py-2 px-4">
          <div>
            <p className="text-sm font-['Inter'] text-[#dfd9d9]">Total</p>
            <p className="text-sm font-['Inter'] text-white">$29.98 USD</p>
          </div>
          <button className="flex items-center bg-[#0c3de9] py-2 px-4">
            <span className="text-sm font-['Inter'] text-[#fffefe]">
              Checkout
            </span>
            <img
              src="https://file.rendit.io/n/RpymOaGIVt5TMW97G29M.svg"

              className="ml-2"
            />
          </button>
        </div>
      </div>
  )
}
