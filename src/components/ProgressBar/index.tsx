import React from 'react';
import { Container } from './styles';

type DivProps = {
  currentItem: number;
  stepsLength: number;
}

export const ProgressBar = ({ currentItem , stepsLength }: DivProps) => {
  return (
    <Container currentItem={currentItem} stepsLength={stepsLength}>
      <div className="bar"></div>
    </Container>
  );
}