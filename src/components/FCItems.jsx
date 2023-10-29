import React from 'react';
import { addCrackerCheckOut } from "../features/crackers/CrackerSlices";
import { useDispatch } from "react-redux";

const FCItems = () => {

  const dispatch = useDispatch();

  var Items = []

  for(let i=1;i<=20;i++)
  Items.push({
      name:"Bomb"+i,
      price:100*i
    })

  const handleAddCracker = (cracker) => {
    const payload = {
      ...cracker,
      add : true,
      remove: false,
      drop: false,
    }
    dispatch(addCrackerCheckOut(payload));
    console.log("Added !!!");
  }

  const handleRemoveCracker = (cracker) => {
    const payload =  {
      ...cracker,
      add: false,
      remove: true,
      drop: false,
    }
    dispatch(addCrackerCheckOut(payload))
    console.log("Reduced !!!");
  }

  const handleDropCracker = (cracker) => {
    const payload = {
      ...cracker,
      add: false,
      remove: false,
      drop: true
    }
    dispatch(addCrackerCheckOut(payload))
    console.log("Dropped !!!");
  }

  return (
    <div className="w-1/2">
      <div className="mt-20 scrollable-section-item">
        {Items.map((list,index)=>(
          <section className=" border rounded-xl border-black mx-20 my-3 bg-orange-100 flex" key={index}>
            <div className="w-full px-10 py-10">
              <p className="font-bold text-3xl">{list.name}</p>
              <p>Box Price : ₹ {list.price}</p>
            </div>
            <div className="flex flex-col text-white font-bold">
              <button className="bg-blue-600 h-1/3 border border-black px-10 rounded-tr-lg hover:border-2 hover:bg-blue-500" onClick={() => handleAddCracker(list)}>Add</button>
              <button className="bg-blue-600 h-1/3 border border-black px-10 hover:border-2 hover:bg-blue-500" onClick={() => handleRemoveCracker(list)}>Reduce</button>
              <button className="bg-blue-600 h-1/3 border border-black px-10 rounded-br-lg hover:border-2 hover:bg-blue-500" onClick={() => handleDropCracker(list)}>Drop</button>
            </div>
          </section>
        ))}
      </div>  
    </div>
  )
}

export default FCItems