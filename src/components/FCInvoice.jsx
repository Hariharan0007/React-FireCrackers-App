import React from 'react'

const FCInvoice = () => {


    const purchaseList = [
        {sno:1,
        item:'Bomb',
        quantity:10},
        {sno:1,
        item:'Bomb',
        quantity:10},
        {sno:1,
        item:'Bomb',
        quantity:10},
        {sno:1,
        item:'Bomb',
        quantity:10},
        {sno:1,
        item:'Bomb',
        quantity:10},
        {sno:1,
        item:'Bomb',
        quantity:10},
        {sno:1,
        item:'Bomb',
        quantity:10},
        {sno:1,
        item:'Bomb',
        quantity:10},
        {sno:1,
        item:'Bomb',
        quantity:10},
        {sno:1,
        item:'Bomb',
        quantity:10},
        {sno:1,
        item:'Bomb',
        quantity:10},
    ]


  return (
    <div>
        <section className="flex justify-center mt-10">
            <div className="border-2 border-dashed border-black w-1/2">
                <div className="flex justify-center items-center border-b-2 border-dashed border-black py-3">
                    <div>
                        <p>Fire - Cracker</p>
                        <p>Pallagoundanpalayam</p>
                    </div>
                </div>

                <div className="border-b-2 border-black border-dashed flex w-full py-5">
                    <div className="flex justify-start w-1/2">
                        <p className="ml-2">Invoice no : PGP156451</p>
                    </div>

                    <div className="flex justify-end items-center w-1/2">
                        <p className="mr-2">Date : 24/10/2023</p>
                        <p className="mr-2">Time : 11:05 PM</p>
                    </div>       
                </div>

                <div className="min-h-2/3 max-h-fit">

                    <table className="w-full">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Cracker Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {purchaseList.map((list)=>(
                                <tr>
                                    <td><span className="flex justify-center">{list.sno}</span></td>
                                    <td><span className="flex justify-center">{list.item}</span></td>
                                    <td><span className="flex justify-center">{list.quantity}</span></td>
                                    <td><span className="flex justify-center">{100}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>

                <div className="border-dashed border-t-2 border-black flex justify-center items-center py-5">
                    <p className="font-bold text-2xl w-full flex justify-center">Total</p>
                    <p className="text-2xl font-bold mr-5">Price</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default FCInvoice