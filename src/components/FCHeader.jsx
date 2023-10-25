import React from 'react';
import Logo from './images/crackers.png';

const FCHeader = () => {
  return (
    <div>
        <header>
            <div className="flex justify-center items-center">
                <img className=" w-36 mr-6" src={Logo} alt="fc-logo" />
                <p className="text-9xl font-bold">Fire - <span className=" italic">Crackers</span></p>
                <img className=" w-36 ml-6" src={Logo} alt="fc-logo" />
            </div>
        </header>
    </div>
  )
}

export default FCHeader