/* eslint-disable no-unused-vars */
import React from "react"
const OrderTable =()  =>{
  const orders = [
    {
      id: "#2343",
      dateTime: "May 10 | 12:44AM",
      price: "$50.00 for 1 item",
      status: "In Processing",
    },
    {
      id: "#2343",
      dateTime: "May 10 | 12:44AM",
      price: "$50.00 for 1 item",
      status: "In Processing",
    },
    {
      id: "#2343",
      dateTime: "May 10 | 12:44AM",
      price: "$50.00 for 1 item",
      status: "In Processing",
    },
    {
      id: "#2343",
      dateTime: "May 10 | 12:44AM",
      price: "$50.00 for 1 item",
      status: "In Processing",
    },
  ]

  return (
    <div className="w-full overflow-x-auto rounded-md shadow-lg p-3 bg-[#FFFFFF]">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="text-left">
            <th className="px-3 py-2 lg:text-sm text-[12px] font-medium hero_h1 text-gray-500">ORDER ID</th>
            <th className="px-3 py-2 lg:text-sm text-[12px] font-medium hero_h1 text-gray-500">DATE & TIME</th>
            <th className="px-3 py-2 lg:text-sm text-[12px] font-medium hero_h1 text-gray-500">TOTAL PRICE</th>
            <th className="px-3 py-2 lg:text-sm text-[12px] font-medium hero_h1 text-gray-500">STATUS</th>
            <th className="px-3 py-2 lg:text-sm text-[12px] font-medium hero_h1 text-gray-500">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="border-t border-gray-100">
              <td className="px-4 py-3 lg:text-sm text-[12px]  font-semibold">{order.id}</td>
              <td className="px-4 py-3 lg:text-sm text-[12px] text-gray-800 font-semibold">{order.dateTime}</td>
              <td className="px-4 py-3 lg:text-sm text-[12px] text-gray-800 font-semibold">{order.price}</td>
              <td className="px-4 py-3">
                <span className="inline-flex items-center px-2.5 py-1.5 rounded-full lg:text-xs text-[12px] font-medium  text-gray-600 border border-[#987C5D] cursor-pointer">
                  {order.status}
                </span>
              </td>
              <td className="px-4 py-3">
                <button className="px-4 py-2 lg:text-xs text-[12px] font-medium text-white bg-[#987C5D] rounded-2xl cursor-pointer transition-colors">
                  Track Order
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}


export default OrderTable
