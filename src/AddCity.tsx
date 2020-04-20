import React from 'react';
import { useRootData } from './hook';

export const AddCity: React.FC = () => {
  const [newCity, setNewCity] = React.useState("")
  const addNewCity = useRootData(store => store.addCity);
  const handleAddNewCity = () => {
    setNewCity("")
    addNewCity(newCity)
  }
  return (
    <>
      <input value={newCity} onChange={e => setNewCity(e.target.value)} />
      <button onClick={handleAddNewCity}>Add city</button>
    </>
  )
}

