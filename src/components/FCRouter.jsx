import React from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import FCHeader from "./FCHeader";
import FCNav from "./FCNav";
// import FCList from "./FCList"; //es-list disable
// import FCAddCrackers from "./FCAddCrackers";
import FCInvoice from "./FCInvoice";

const FCRouter = () => {
  return (
    <Router>
        <FCHeader/>
        <FCNav/>
        <Routes>
            <Route path="/" element={<FCInvoice/>}/>
        </Routes>
    </Router>
  )
}

export default FCRouter