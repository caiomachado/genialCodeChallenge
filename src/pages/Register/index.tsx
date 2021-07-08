import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom'

import logoBlueImg from '../../assets/images/logo-blue.svg';
import arrowRight from '../../assets/images/arrow-right.svg';
import arrowImg from '../../assets/images/arrow.svg';
import resendIcon from '../../assets/images/resend.svg';

import { Container } from './styles';
import { Input } from '../../components/Input';
import { ProgressBar } from '../../components/ProgressBar';

type ObjectTypes = {
  value: string;
  labelText: string;
  placeholderText: string;
  infoTitle?: string;
  infoText?: string;
  infoList?: string[];
  inputType: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  verified: boolean;
  toVerify: (e: string) => void;
}

export const Register: React.FC = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [confirmedEmail, setConfirmedEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [cpf, setCpf] = useState("")
  const [password, setPassword] = useState("")
  const [confirmedPassword, setConfirmedPassword] = useState("")
  const [items, setItems] = useState<ObjectTypes[]>([])
  const [currentItem, setCurrentItem] = useState(0)
  const [isVerified, setIsVerified] = useState(false)
  const [isAllowedToPass, setIsAllowedToPass] = useState(false)
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [uploadPhoto, setUploadPhoto] = useState(false);
  const inputsRef = useRef<any>([]);
  const history = useHistory();

  function checkInputValueToVerify(inputValue: string) {
    if (inputValue !== "") {
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
  }

  function checkCode() {
    setIsCodeSent(false);
    setIsAllowedToPass(false);
  }

  function verifyCode(event: any) {
    if (event.target.value !== "") {
      setIsAllowedToPass(true);
    } else {
      setIsAllowedToPass(false);
    }
  }

  function finishRegistration() {
    setUploadPhoto(false)
    history.push('/')
  }

  const MAX_ITEMS = 2;

  const steps = [
    {
      value: name,
      labelText: 'Qual é o seu nome completo?',
      placeholderText: 'Nome Sobrenome',
      inputType: 'text',
      infoTitle: 'Cadastre-se e crie sua Conta Genial',
      infoText: 'Tempo médio com documentos em mãos: 3min',
      handleChange: 
        (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value),
      verified: isVerified,
      toVerify: checkInputValueToVerify
    },
    {
      value: email,
      labelText: 'Qual é o seu email?',
      placeholderText: 'contato@exemplo.com',
      inputType: 'email',
      handleChange: 
        (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value),
      verified: isVerified,
      toVerify: checkInputValueToVerify
    },
    {
      value: confirmedEmail,
      labelText: 'Confirme o seu email',
      placeholderText: 'contato@exemplo.com',
      inputType: 'email',
      handleChange: 
        (event: React.ChangeEvent<HTMLInputElement>) => setConfirmedEmail(event.target.value),
      verified: isVerified,
      toVerify: checkInputValueToVerify
    },
    {
      value: phone,
      labelText: 'Qual é o seu celular?',
      placeholderText: '(99) 99999-9999',
      inputType: 'tel',
      handleChange: 
        (event: React.ChangeEvent<HTMLInputElement>) => setPhone(event.target.value),
      verified: isVerified,
      toVerify: checkInputValueToVerify
    },
    {
      value: cpf,
      labelText: 'Qual é o seu CPF?',
      placeholderText: '000000000-00',
      inputType: 'text',
      handleChange: 
        (event: React.ChangeEvent<HTMLInputElement>) => setCpf(event.target.value),
      verified: isVerified,
      toVerify: checkInputValueToVerify
    },
    {
      value: password,
      labelText: 'Crie sua senha',
      placeholderText: 'Siga as instruções abaixo',
      infoList: ['Sua senha deve ser apenas numérica', 'Deve ter apenas 6 números', 'Não utilize números sequenciais ou repetidos'],
      inputType: 'password',
      handleChange: 
        (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value),
      verified: isVerified,
      toVerify: checkInputValueToVerify
    },
    {
      value: confirmedPassword,
      labelText: 'Confirme sua senha',
      placeholderText: 'Escreva a mesma senha',
      infoList: ['Sua senha deve ser apenas numérica', 'Deve ter apenas 6 números', 'Não utilize números sequenciais ou repetidos'],
      inputType: 'password',
      handleChange: 
        (event: React.ChangeEvent<HTMLInputElement>) => setConfirmedPassword(event.target.value),
      verified: isVerified,
      toVerify: checkInputValueToVerify
    }
  ]
  
  function handleCreateInput(item: ObjectTypes, index?: number) {
    return (
      <Input
        key={index}
        value={item.value}
        labelText={item.labelText}
        placeholderText={item.placeholderText}
        infoTitle={item.infoTitle}
        infoText={item.infoText}
        infoList={item.infoList}
        inputType={item.inputType}
        handleChange={item.handleChange}
        verified={item.verified}
        toVerify={item.toVerify}
      />
    )
  }

  function handleInputCodeChange(event: any, index: any) {
    if (event.target.value === "") {
      return null;
    }
    if (index + 1 > 3) {
      inputsRef.current[0].focus();
    } else {
      inputsRef.current[index + 1].focus();
    }
  }

  function nextStep() {
    if (currentItem === 2) {
      if (email !== confirmedEmail) {
        alert("Emails não coincidem")
        return;
      }
    }
    
    if (currentItem === 6) {
      if (password !== confirmedPassword) {
        alert("Senhas não coincidem")
        return;
      }
    }

    if (currentItem === 3) {
      setIsCodeSent(true);
    }
    
    if (currentItem === (steps.length - 1)) {
      setUploadPhoto(true);
    }
    
    if (currentItem <= steps.length) {
      setItems(prevState => [...prevState, steps[currentItem]])
      setCurrentItem(currentItem + 1)
    }
    return null;
  }

  function previousStep() {
    if (currentItem - 1 >= 0) {
      const newItemsList = items.slice(0, items.length - 1)
      setItems(newItemsList)
      setCurrentItem(currentItem - 1)
      setIsCodeSent(false)
      setUploadPhoto(false)
    }

    return null;
  }

  return (
    <Container>
      <img className="logo" src={logoBlueImg} alt="Logo Genial" />
      <div className="input-list" onClick={previousStep}>
        {items && items.length > 0 && items.slice(currentItem - MAX_ITEMS < 0 ? 0 : currentItem - MAX_ITEMS, currentItem).map((item, index) => {
          return handleCreateInput(item, Math.random())
        })}
      </div>
      <div className="input-wrapper">
        {isCodeSent && !uploadPhoto && (
          <>
            <div className="code-step-information">
              <h1>Vamos validar seu número...</h1>
              <p>Digite o código de verificação que enviamos para {phone}</p>
            </div>
            <div className="code-input-block">
              {[...new Array(4)].map((_, i) => <input className="code-input" key={i} onBlur={e => verifyCode(e)} type="text"  onChange={(e) => handleInputCodeChange(e, i)} maxLength={1} ref={el => (inputsRef.current[i] = el)} />)}
            </div>
            <button className="resend-button" type="button" onClick={() => alert('Código enviado com sucesso')}>
              <img src={resendIcon} alt="Resend Code" /> Enviar código novamente
            </button>
          </>
        )}
        {uploadPhoto && !isCodeSent && (
          <>
            <div className="photo-step-information">
              <h1>Pronto para a foto? Tire sua selfie de identificação.</h1>
              <p>
                Tire uma foto segurando o documento próximo ao rosto. É importante que tanto
                o seu rosto quanto o seu documento estejam nítidos e visíveis.
              </p>
            </div>
            <div className="action-buttons">
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
            </div>
            <button type="button" onClick={finishRegistration} className="register-later">Cadastrar foto depois</button>
          </>
        )}
        {steps && !isCodeSent && !uploadPhoto && handleCreateInput(steps[currentItem])}
      </div>
      {isCodeSent && !uploadPhoto && (
        <div className="next-block">
          <span className={!isAllowedToPass ? "disabled" : ""}>Próximo</span>
          <button type="button" className="button-next" onClick={checkCode} disabled={!isAllowedToPass}>
            <img src={arrowRight} alt="Next Step" />
          </button>
        </div>
      )} 
      {!isCodeSent && !uploadPhoto &&(
        <div className="next-block">
          <span className={!isVerified ? "disabled" : ""}>Próximo</span>
          <button type="button" className="button-next" onClick={nextStep} disabled={!isVerified}>
            <img src={arrowRight} alt="Next Step" />
          </button>
        </div>
      )}
      <ProgressBar currentItem={currentItem} stepsLength={steps.length}/>
    </Container>
  );
}