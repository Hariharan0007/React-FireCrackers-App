import React, { useEffect, useState } from 'react'
import instance from "../api/api"

const FCList = () => {

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


  return (
    <div>
      <section>
        <p className="font-bold text-3xl pl-4 pt-4 underline">Stock Details</p>
        <div className="mx-20 mt-10 scrollable-section no-scrollbar overflow-auto">
          <table className="w-full">
            <thead className="sticky top-0 bg-white border border-black">
              <tr className="border border-black text-2xl h-20">
                <th>S.No</th>
                <th>Item Name</th>
                <th>Total Quantity</th>
                <th>₹. Price Per box</th>
                <th>Current Quantity</th>
                <th>Sold Out</th>
              </tr>
            </thead>
            <tbody>
              {crackers.map((list,index) => (
                <tr
                  key={list.cracker_id}
                  className="border hover:bg-gray-400 border-black text-xl hover:cursor-pointer hover:font-bold h-20"
                >
                  <td>
                    <span className="flex justify-center">{index+1}</span>
                  </td>
                  <td>
                    <span className="flex justify-center">{list.cracker_name}</span>
                  </td>
                  <td>
                    <span className="flex justify-center">{list.quantity}</span>
                  </td>
                  <td>
                    <span className="flex justify-center">{list.price_per_box}</span>
                  </td>
                  <td>
                    <span className="flex justify-center">{list.available_quantity}</span>
                  </td>
                  <td>
                    <span className="flex justify-center">{list.quantity - list.available_quantity}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>

  )
}

export default FCList