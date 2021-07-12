import React from 'react';
import logoImg from '../../assets/images/logo.svg';

import { Container } from './styles';

export const LoadingScreen = () => {
  return (
    <Container>
      <img src={logoImg} alt="Logo Genial" />
    </Container>
  );
}