import React from 'react'

const FCList = () => {


  var crackersList = []

  for(let i=1;i<=100;i++){
    crackersList = [...crackersList,{'sno':i,
                                      'iname':'Bomb ' + i,
                                      'total':100,
                                      'price':100,
                                      'cq':40,
                                      'so':60}]
  }

  console.log(crackersList);

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
              {crackersList.map((list) => (
                <tr
                  key={list.sno}
                  className="border hover:bg-gray-400 border-black text-xl hover:cursor-pointer hover:font-bold h-20"
                >
                  <td>
                    <span className="flex justify-center">{list.sno}</span>
                  </td>
                  <td>
                    <span className="flex justify-center">{list.iname}</span>
                  </td>
                  <td>
                    <span className="flex justify-center">{list.total}</span>
                  </td>
                  <td>
                    <span className="flex justify-center">{list.price}</span>
                  </td>
                  <td>
                    <span className="flex justify-center">{list.cq}</span>
                  </td>
                  <td>
                    <span className="flex justify-center">{list.so}</span>
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