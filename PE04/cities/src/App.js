import React, { useState } from 'react';
import "./style.css";
import AddCity from "./AddCity";
import CityList from "./CityList";
import CityDetails from "./CityDetails";

import { BrowserRouter, Route, Routes ,NavLink} from "react-router-dom";


function App () {
  const [cities, setCities] = useState([]);

  const handleAddCity = newCity => {
    setCities(prevCities => [...prevCities, newCity]);
  };


    return (
      <BrowserRouter>
        <div className="container">
          <nav className="navbar">
            <h1 className="title"> Cities Application</h1>
            <ul>
              
              <li>
                {/* <Link to="/">Add City</Link> */}
                <NavLink to="/addCity" activeClassName="active">
                  Add City
                </NavLink>
              </li>
              <li>
                {/* <Link to="/">Cities List</Link> */}
                <NavLink to="/" activeClassName="active">
                  Cities List
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="content">
            <Routes>
              <Route path="/addCity" element={<AddCity onAddCity={handleAddCity} />} />
              <Route path="/" element={<CityList cities={cities} />} />
              <Route path="/cities/:cityId" element={<CityDetails  cities={cities}/>} /> 
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
}

export default App;
