import React from 'react';
import { ContainerButton } from './styles';

const Button = ({ props, children }) => {
  return (
    <ContainerButton {...props}>
      {children}
    </ContainerButton>
  );
};

export default Button;