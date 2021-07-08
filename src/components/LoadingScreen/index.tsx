import React from 'react';
import logoImg from '../../assets/images/logo.svg';

import { Container } from './styles';

export const LoadingScreen: React.FC = () => {
  return (
    <Container>
      <img src={logoImg} alt="Logo Genial" />
    </Container>
  );
}