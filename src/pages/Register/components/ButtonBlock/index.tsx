import React from 'react';

import { Container } from './styles';

import arrowRight from '../../../../assets/images/arrow-right.svg';

type ButtonBlockProps = {
  verified: boolean;
  handleNext: () => void; 
}

export const ButtonBlock = ({verified, handleNext}: ButtonBlockProps) => {
  return (
    <Container>
      <span className={!verified ? "disabled" : ""}>Próximo</span>
      <button type="button" className="button-next" onClick={handleNext} disabled={!verified}>
        <img src={arrowRight} alt="Next Step" />
      </button>  
    </Container>
  );
}