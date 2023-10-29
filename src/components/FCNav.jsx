import React from 'react';
import { useNavigate } from 'react-router-dom';

const FCNav = () => {

  const nav = useNavigate()

  return (
    <div>
        <section className="flex items-center w-full px-10 border py-2">
            <div className="flex justify-start items-center w-full h-14">
                <button className="bg-blue-600 h-full rounded-lg text-white font-bold text-xl px-10 mr-5" onClick={()=>nav("/")}>Billing</button>
                <button className="bg-blue-600 h-full rounded-lg text-white font-bold text-xl px-10" onClick={()=>nav("/Invoice")}>Purchase Details</button>
            </div>

            <div className="flex justify-end items-center w-full h-14">
                <button className="bg-blue-600 h-full rounded-lg text-white font-bold text-xl px-10 mr-5" onClick={()=>nav("/View-Stocks")}>View Stocks</button>
                <button className="bg-blue-600 h-full rounded-lg text-white font-bold text-xl px-10 mr-5" onClick={()=>nav("/Add-Crackers")}>Add Crackers</button>
            </div>
        </section>
    </div>
  )
}

export default FCNav