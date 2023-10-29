import React from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import FCHeader from "./FCHeader";
import FCNav from "./FCNav";
import FCAddCrackers from "./FCAddCrackers";
import FCBilling from './FCBilling';
import FCInvoice from "./FCInvoice";
import FCList from "./FCList";

const FCRouter = () => {
  return (
    <Router>
        <FCHeader/>
        <FCNav/>
        <Routes>
            <Route path="/" element={<FCBilling/>}/>
            <Route path="/View-Stocks" element={<FCList/>}/>
            <Route path="/Add-Crackers" element={<FCAddCrackers/>}/>
            <Route path="/Invoice" element={<FCInvoice/>}/>
        </Routes>
    </Router>
  )
}

export default FCRouter