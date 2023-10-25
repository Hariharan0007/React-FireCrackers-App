import React from 'react';
import FCList from "./FCList";
import FCAddCrackers from './FCAddCrackers';

const FCNav = () => {
  return (
    <div>
        <section className="flex items-center w-full px-10 border py-2">
            <div className="flex justify-start items-center w-full h-14">
                <button className="bg-blue-600 h-full rounded-lg text-white font-bold text-xl px-10 mr-5">Billing</button>
                <button className="bg-blue-600 h-full rounded-lg text-white font-bold text-xl px-10">Purchase Details</button>
            </div>

            <div className="flex justify-end items-center w-full h-14">
                <button className="bg-blue-600 h-full rounded-lg text-white font-bold text-xl px-10 mr-5">View Stocks</button>
                <button className="bg-blue-600 h-full rounded-lg text-white font-bold text-xl px-10 mr-5">Add Crackers</button>
            </div>
        </section>
    </div>
  )
}

export default FCNav