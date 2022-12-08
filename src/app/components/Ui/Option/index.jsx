import React from 'react';
import { Select } from './styles';

const Option = ({ type, setType }) => {
  return (
    <Select 
      name="imobi" 
      value={type} 
      onChange={texto => setType(texto.target.value)}
    >
      <option value="" hidden>Type</option>
      <option value="1">Audi</option>
      <option value="2">BMW</option>
      <option value="3">Citroen</option>
      <option value="4">Ford</option>
    </Select>
  );
};

export default Option;