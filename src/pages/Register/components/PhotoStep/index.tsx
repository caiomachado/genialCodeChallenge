import React from 'react';

import arrowImg from '../../../../assets/images/arrow.svg';
import { InfoBlock, ActionButtonBlock, Button } from './styles';

type PhotoStepProps = {
  handleClick: () => void;
}

export const PhotoStep = ({handleClick}: PhotoStepProps) => {
  return (
    <>
      <InfoBlock className="photo-step-information">
        <h1>Pronto para a foto? Tire sua selfie de identificação.</h1>
        <p>
          Tire uma foto segurando o documento próximo ao rosto. É importante que tanto
          o seu rosto quanto o seu documento estejam nítidos e visíveis.
        </p>
      </InfoBlock>
      <ActionButtonBlock className="action-buttons">
        <button className="upload-button" type="button" onClick={() => alert('Serviço temporariamente indisponível')}>
          <div className="text-wrapper">
            <span>CNH</span>
            <span className="recommendation">recomendado</span>
          </div>
          <img src={arrowImg} alt="Upload file" />
        </button>
        <button className="upload-button" type="button" onClick={() => alert('Serviço temporariamente indisponível')}>
          <div className="text-wrapper">
            <span>RG</span>
          </div>
          <img src={arrowImg} alt="Upload file" />
        </button>
      </ActionButtonBlock>
      <Button type="button" onClick={handleClick} className="register-later">Cadastrar foto depois</Button>
    </>
  );
}