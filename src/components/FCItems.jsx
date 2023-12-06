import React, { useEffect, useState } from 'react';
import { addCrackerCheckOut } from "../features/crackers/CrackerSlices";
import { useDispatch, useSelector } from "react-redux";
import instance from "../api/api";

const FCItems = () => {

  const dispatch = useDispatch();
  const soldQuantity = useSelector((state) => state.cracker.crackersList);

  console.log(soldQuantity);

  const [crackers, setCrackers] = useState([]);

  const getCrackers = () => {
    return instance.get('/crackers/') // Return the promise
      .then(response => response.data)
      .catch(error => {
        console.error('Error:', error);
        return []; // Return an empty array in case of an error
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching crackers...");
      try {
        const crackersData = await getCrackers();
        setCrackers(crackersData);
        console.log("Crackers data:", crackersData);
      } catch (error) {
        console.error('Error fetching crackers:', error);
      }
    };

    fetchData();
  }, []);

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
        {crackers.map((list)=>(
          <section className=" border rounded-xl border-black mx-20 my-3 bg-orange-100 flex" key={list.cracker_id}>
            <div className="w-full px-10 py-10">
              <p className="font-bold text-3xl">{list.cracker_name}</p>
              <p>Box Price : ₹ {list.price_per_box}</p>
              <p>Available Quantity : {list.available_quantity}</p>
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