import React from 'react';
import { Filter } from './Filter';
import { CityList } from './CityList';
import { AddCity } from './AddCity';
import StoreProvider from './context';

const App: React.FC = () => (
  <StoreProvider>
    <h1>mobx-react-lite + mobx-state-tree demo</h1>
    <Filter />
    <CityList />
    <AddCity />
  </StoreProvider>
);

export default App;