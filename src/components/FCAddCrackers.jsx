import React, { useState } from 'react';
import Logo from './images/crackers.png';

const FCAddCrackers = () => {


  const [name,setName] = useState('');
  const [quantity,setQuantity] = useState(0);
  const [price,setPrice] = useState(0);

  const handleSubmit = () =>{
    if(name==='' || quantity===0 || price===0){
      alert("Invalid Input");
      return;
    }
    alert("Added Successfully")
  }


  return (
    <div>
        <section className="flex justify-center mt-10">
          <div className="w-1/2">
            <div className="flex justify-center items-center">
              <img className="w-12" src={Logo} alt="" />
              <p className="font-bold text-5xl">Add Crackers</p>
              <img className="w-12" src={Logo} alt="" />
            </div>
            <div>
              <div className="flex flex-col mt-10">
                <label className=" font-bold text-lg ">Cracker Name</label>
                <input className="outline-none text-xl border border-blue-600 h-12 rounded-md px-5 focus-within:border-4" type="text" onChange={(e)=>setName(e.target.value)}/>
              </div>
              <div className="flex flex-col mt-10">
                <label className=" font-bold text-lg ">Quantity</label>
                <input className="outline-none text-xl border border-blue-600 h-12 rounded-md px-5 focus-within:border-4" type="number" min={0} onChange={(e)=>setQuantity(e.target.value)}/>
              </div>
              <div className="flex flex-col mt-10">
                <label className=" font-bold text-lg ">Price Per Box</label>
                <input className="outline-none text-xl border border-blue-600 h-12 rounded-md px-5 focus-within:border-4" type="number" min={0} onChange={(e)=>setPrice(e.target.value)}/>
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <button className="bg-blue-600 rounded-lg px-4 py-4 text-xl font-bold text-white" onClick={()=>handleSubmit()}>Add Cracker</button>
            </div>
          </div>
        </section>
    </div>
  )
}

export default FCAddCrackers