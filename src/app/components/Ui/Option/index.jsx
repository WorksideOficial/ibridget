import React from 'react';
import { Select } from './styles';

const Option = ({ search, setSearch, dataClient }) => {
  return (
    <Select
      name="text"
      value={search}
      onChange={search => setSearch(search.target.value)}
    >
      {dataClient.map((item, index) => {
        return (
          <option key={index}>{item}</option>
        );
      })}
    </Select>
  );
};

export default Option;