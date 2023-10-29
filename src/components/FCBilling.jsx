import React from 'react'
import FCItems from './FCItems';
import FCCheckOut from "./FCCheckOut";
import { useSelector } from "react-redux";

const FCBilling = () => {

  const crackerList = useSelector((state) => state.cracker.crackersList);
  console.log(crackerList);

  return (
    <div className="flex">
      <FCItems />
      <FCCheckOut />
    </div>
  )
}

export default FCBilling