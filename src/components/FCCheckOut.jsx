import React from 'react'
import { useSelector } from "react-redux"
import { v4 as uid } from "uuid";
import instance from "../api/api";

const FCCheckOut = () => {

  const Items = useSelector((state)=>state.cracker.crackersList);

  const totalPrice = useSelector((state)=>state.cracker.totalPrice);

  const updateCrackerQuantity = async(crackers) => {
    try {
      const response = await instance.put('/crackers/', crackers);
      console.log(response.data); // Log the response from the backend
    } catch (error) {
      console.error('Error updating crackers quantity:', error);
    }
  }

  const AddNewSale = async(Invoice) => {
    try {
    const response = await instance.post('/sales', Invoice);
    console.log(response.data); // Log the response from the backend
  } catch (error) {
    console.error('Error updating crackers quantity:', error);
  }
  }

  const handleCheckOut = (Items) =>{
    const dateTime = new Date();
    console.log(dateTime.toLocaleString(),totalPrice);
    console.log(Items);
    const invoice_details = {
      invoice_no : uid(),
      date_time : dateTime.toLocaleString(),
      amount: totalPrice
    }
    // updateCrackerQuantity(Items);
    // window.print();
    // AddNewSale(invoice_details);
    // instance.post('/sales/',invoice_details).then(response => {console.log(response.data)}).catch(error => {console.log("ERROR : ",error);})
    // instance.put('/crackers/',Items).then(response => { console.log(response.status) }).catch(error => {console.log("ERROR : ",error);})
  }


  return (
    <div className="w-1/2">
        <section className="h-full">
            <div className="flex justify-center py-10 text-2xl font-bold">
              <p>Check Out</p>
            </div>
            <div className="scrollable-section-checkout-item">
                {Items.map((list)=>(
                  <section className=" border rounded-xl border-black mx-20 my-3 bg-orange-100 flex" key={list.id}>
                    <div className="w-full px-10 py-5">
                      <p className="font-bold text-3xl">{list.name}</p>
                    </div>
                    <div className="flex flex-col items-center w-20 py-5 mx-5">
                      <p>Quantity</p>
                      <p>{list.quantity}</p>
                    </div>
                    <div className="w-20 py-5 mx-5">
                      <p>Price</p>
                      <p>₹ {list.price}</p>
                    </div>
                  </section>
                ))}
            </div>
            <div className="flex items-center justify-end mr-20 pt-5">
              <p className="font-bold text-xl mr-10">Total Price : ₹ {totalPrice}</p>
              <button className="bg-blue-600 rounded-lg text-white font-bold h-14 px-10 text-xl" onClick={()=>handleCheckOut(Items)}>Check Out</button>
            </div>
        </section>
    </div>
  )
}

export default FCCheckOut