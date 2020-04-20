import React from 'react';
import { useRootData } from './hook';

export const Filter: React.FC = () => {
  const { query, setQuery } = useRootData(store => ({
    query: store.query,
    setQuery: store.setQuery
  }));

  return (
    <>
      <label>Filter</label>
      <input value={query} onChange={e => setQuery(e.target.value)} />
    </>
  );
}
