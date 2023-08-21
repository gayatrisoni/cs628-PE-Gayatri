import "./style.css";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddCity({onAddCity})  {

  const navigate = useNavigate();
  const [newCity, setNewCity] = useState({
    id: Date.now(), // Generate a unique ID
    Name: '',
    Country: '',
    Population: '',
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setNewCity(prevCity => ({ ...prevCity, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    onAddCity(newCity);
    navigate('/'); // Navigate to Cities List after adding a city
  };

  return (
    <div>
      <h2> Add City</h2>
      <div className="rounded-box">
        <form >
          <div className="form-group">
            <lable>Name: </lable>
            <input
              type="text"
              name = "Name"
              onChange={handleInputChange}
              value={newCity.Name}
              className="city"
            />{" "}
            <br />
            <lable>Country:</lable>
            <input
              type="text"
              name= "Country"
              value={newCity.Country}
              onChange={handleInputChange}
              className="city"
            />
            <br />
            <lable>Population:</lable>
            <input type="number" name="Population" onChange={handleInputChange} value={newCity.Population} className="city" />
            <br />
            <button className="btn" onClick={handleSubmit}>
              AddCity
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCity;
