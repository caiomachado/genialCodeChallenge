import React from 'react';
import { Container } from './styles';

type DivProps = {
  currentItem: number;
  stepsLength: number;
}

export const ProgressBar: React.FC<DivProps> = ({ currentItem , stepsLength }) => {
  return (
    <Container currentItem={currentItem} stepsLength={stepsLength}>
      <div className="bar"></div>
    </Container>
  );
}