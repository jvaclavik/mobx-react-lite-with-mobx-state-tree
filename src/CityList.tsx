import React from 'react';
import { useRootData } from './hook';

const CityView: React.FC<{ cities: string[] }> = ({ cities }) => {
  return (
    <ul>
      {cities.map(city => <li key={city}>{city}</li>)}
    </ul>
  );
}

export const CityList = () => {
  const cities = useRootData(store => store.filteredCities);
  return <CityView cities={cities} />
}
