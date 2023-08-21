import React from 'react'
import { useParams } from 'react-router-dom';

function CityDetails ({cities}) {
  const { cityId } = useParams();
  const city = cities.find(city => city.id.toString() === cityId);

  if (!city) {
    return <div className="city-not-found">City not found .....</div>;
  }

  return (
        <div className="city-details">
          <h1>City Details</h1>
          <h2>{city.Name}</h2>
          <p>Country: {city.Country}</p>
          <p>Population: {city.Population}</p>
      </div>
  );
}

export default CityDetails
