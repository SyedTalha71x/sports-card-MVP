/* eslint-disable no-unused-vars */
import React from "react";
import SingleCardImage from '../../public/single-card-image.svg'
import PackDetailCard from '../../public/PACK DETAILS.svg'

export default function PackDetails() {
  const cards = [
    ...[1, 2, 3].map((id) => ({
      id,
      tier: 1,
      imageUrl: SingleCardImage,
    })),
    ...[4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((id) => ({
      id,
      tier: 2,
      imageUrl: SingleCardImage,
    })),
  ];

  return (
    <main className="lg:mt-[10%] md:mt-[10%] sm:mt-[15%] mt-[20%]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl hero_h1 mb-2"><div><img src={PackDetailCard} className="h-auto w-auto" alt="" /></div>Pack Name here...</h1>
          <p className="text-gray-400 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          </p>
        </div>

        <div className="mt-10 bg-[#FFFFFF] p-6 rounded-2xl">
          <div className="flex lg:justify-between md:justify-between sm:justify-center justify-center lg:flex-row sm:flex-col flex-col lg:items-start items-center text-center sm:text-left">
            <div>
              <h2 className="text-2xl hero_h1">Pack Cards</h2>
              <p className="text-gray-600 text-sm">You will receive the best cards from the below cards.</p>
            </div>

            <div className="flex sm:flex-row flex-col items-center gap-4 lg:mt-0 mt-5">
              <span className="text-2xl hero_h1">$200.00</span>
              <button className="bg-[#2B3B5C] text-white lg:px-8 px-6 py-2 text-sm rounded-3xl cursor-pointer hover:bg-[#374b73] transition-colors">
                Buy Now
              </button>
            </div>
          </div>

          <div className="h-[1px] bg-slate-300/30 mt-7"></div>

          <div className="mt-7">
            <h3 className="text-2xl text-gray-900 hero_h1">Tier 1 Cards (The big 3)</h3>
            <div className="flex lg:justify-start justify-center flex-wrap cursor-pointer items-center gap-4 mt-7">
              {cards
                .filter((card) => card.tier === 1)
                .map((card) => (
                  <div
                    key={card.id}
                    className="relative p-4 bg-gray-100 cursor-pointer transition-all ease-in-out duration-500 rounded-xl overflow-hidden hover:shadow-lg"
                  >
                    <div className="bg-[#FFFFFF] w-16 flex justify-center items-center py-1.5 px-6 rounded-md text-black text-sm cursor-pointer">
                      $100
                    </div>
                    <img
                      src={card.imageUrl}
                      alt={`Card ${card.id}`}
                      className="object-contain p-2 h-auto w-auto"
                    />
                  </div>
                ))}
            </div>
          </div>

          <div className="h-[1px] bg-slate-300/30 mt-7"></div>

          <div className="mt-7">
            <h3 className="text-2xl text-gray-900 hero_h1">Tier 2 Cards</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-7">
              {cards
                .filter((card) => card.tier === 2)
                .map((card) => (
                  <div
                    key={card.id}
                    className="relative aspect-[3/4] flex justify-center items-center bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={card.imageUrl || "/placeholder.svg"}
                      alt={`Card ${card.id}`}
                      className="object-contain p-2"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
