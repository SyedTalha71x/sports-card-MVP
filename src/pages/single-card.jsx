/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import SingleCardImage from "../../public/single-card-image.svg";
import PackDetailCard from "../../public/PACK DETAILS.svg";
import GiftRapped from '../../public/noto_wrapped-gift.svg'

export default function PackDetails() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fromCheckout = new URLSearchParams(window.location.search).get(
      "fromCheckout"
    );
    if (fromCheckout === "true") {
      setShowModal(true);
    }
  }, []);

  const handleBackToHome = () => {
    window.location.href = "/";
  };
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

  const redirect = () => {
    window.location.href = "/add-payment-method";
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-xs flex items-center justify-center z-50">
          <div className="bg-[#FFFFFF] rounded-3xl p-8 max-w-xl w-full mx-4 text-center relative">
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <div
                className="w-full h-full opacity-10"
                // style={{
                //   backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff0000' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                // }}
              ></div>
            </div>

            <div className="relative mb-4 flex justify-center items-center">
             <img src={GiftRapped} alt="" />
            </div>

            <div className="relative">
              <h2 className="text-2xl  hero_h1 mb-2">Congratulation!</h2>
              <p className="text-gray-700 text-sm">
                You have successfully unlocked the top tier cards of a pack name
                here.
              </p>
              <p className="text-gray-600 text-sm mb-6">
                You will receive a confirmation email as soon as possible.
              </p>

              <button
                onClick={handleBackToHome}
                className="w-full bg-[#2F456C] text-white py-3 px-6 cursor-pointer text-sm rounded-3xl hover:bg-[#374b73] transition-colors"
              >
                Back to home page &gt;&gt;
              </button>
            </div>
          </div>
        </div>
      )}
      <main className="lg:mt-[10%] md:mt-[10%] sm:mt-[15%] mt-[30%]">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="lg:text-4xl text-3xl hero_h1 mb-2">
              <div>
                <img src={PackDetailCard} className="h-auto w-auto" alt="" />
              </div>
              Pack Name here...
            </h1>
            <p className="text-gray-400 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
          </div>

          <div className="mt-10 bg-[#FFFFFF] p-6 rounded-2xl">
            <div className="flex lg:justify-between md:justify-between sm:justify-center justify-center lg:flex-row sm:flex-col flex-col lg:items-start items-center text-center sm:text-left">
              <div>
                <h2 className="text-2xl hero_h1">Pack Cards</h2>
                <p className="text-gray-600 text-sm">
                  You will receive the best cards from the below cards.
                </p>
              </div>

              <div className="flex sm:flex-row flex-col items-center gap-4 lg:mt-0 mt-5">
                <span className="text-2xl hero_h1">$200.00</span>
                <button
                  onClick={redirect}
                  className="bg-[#2B3B5C] text-white lg:px-8 px-6 py-2 text-sm rounded-3xl cursor-pointer hover:bg-[#374b73] transition-colors"
                >
                  Buy Now
                </button>
              </div>
            </div>

            <div className="h-[1px] bg-slate-300/30 mt-7"></div>

            <div className="mt-7">
              <h3 className="text-2xl text-gray-900 hero_h1">
                Tier 1 Cards (The big 3)
              </h3>
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
                        className="object-contain p-2 h-auto w-auto card-flip-wrapper"
                      />
                    </div>
                  ))}
              </div>
            </div>

            <div className="h-[1px] bg-slate-300/30 mt-7"></div>

            <div className="mt-7">
              <h3 className="text-2xl text-gray-900 hero_h1">Tier 2 Cards</h3>
              <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-7">
                {cards
                  .filter((card) => card.tier === 2)
                  .map((card) => (
                    <div
                      key={card.id}
                      className="relative aspect-[3/4] lg:p-0 p-3 flex justify-center items-center bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <img
                        src={card.imageUrl || "/placeholder.svg"}
                        alt={`Card ${card.id}`}
                        className="object-contain p-2 "
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
