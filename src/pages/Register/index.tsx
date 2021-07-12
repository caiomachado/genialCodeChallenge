import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom'

import logoBlueImg from '../../assets/images/logo-blue.svg';
import resendIcon from '../../assets/images/resend.svg';

import { Container } from './styles';
import { Input } from '../../components/Input';
import { ProgressBar } from '../../components/ProgressBar';
import { ButtonBlock } from './components/ButtonBlock';
import { PhotoStep } from './components/PhotoStep';

type ObjectTypes = {
  value: string;
  labelText: string;
  placeholderText: string;
  infoTitle?: string;
  infoText?: string;
  infoList?: string[];
  inputType: string;
  validateType: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  verified: boolean;
  toVerify: (value: string, type: string) => void;
}

export const Register = () => {
  const [name, setName] = useState(window.localStorage.getItem('name') ?? "")
  const [email, setEmail] = useState(window.localStorage.getItem('email') ?? "")
  const [confirmedEmail, setConfirmedEmail] = useState(window.localStorage.getItem('confirm_email') ?? "")
  const [phone, setPhone] = useState(window.localStorage.getItem('phone') ?? "")
  const [cpf, setCpf] = useState(window.localStorage.getItem('cpf') ?? "")
  const [password, setPassword] = useState(window.localStorage.getItem('password') ?? "")
  const [confirmedPassword, setConfirmedPassword] = useState(window.localStorage.getItem('confirm_password') ?? "")
  const [items, setItems] = useState<ObjectTypes[]>([])
  const [currentItem, setCurrentItem] = useState(0)
  const [isVerified, setIsVerified] = useState(false)
  const [isAllowedToPass, setIsAllowedToPass] = useState(false)
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [uploadPhoto, setUploadPhoto] = useState(false);
  const inputsRef = useRef<any>([]);
  const history = useHistory();

  const MAX_ITEMS = 2;

  const steps = [
    {
      value: name,
      labelText: 'Qual é o seu nome completo?',
      placeholderText: 'Nome Sobrenome',
      inputType: 'text',
      validateType: 'name',
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
      validateType: 'email',
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
      validateType: 'confirm_email',
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
      validateType: 'phone',
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
      validateType: 'cpf',
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
      validateType: 'password',
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
      validateType: 'confirm_password',
      handleChange: 
        (event: React.ChangeEvent<HTMLInputElement>) => setConfirmedPassword(event.target.value),
      verified: isVerified,
      toVerify: checkInputValueToVerify
    }
  ]

  function checkInputValueToVerify(inputValue: string, validateType: string) {
    switch (validateType) {
      case "name":
        if (inputValue !== "") {
          setIsVerified(true);
        } else {
          setIsVerified(false);
        }
        break;
      case "email":
        // eslint-disable-next-line no-useless-escape
        const emailRegex = new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/, 'gi');
        if (emailRegex.test(inputValue)) {
          setIsVerified(true)
        } else {
          setIsVerified(false)
        }
        break;
      case "confirm_email":
        if (email === inputValue) {
          setIsVerified(true);
        } else {
          setIsVerified(false);
        }
        break;
      case "phone":
        const rawPhoneNumber = inputValue.replace(/\D/gi, "");
        if (rawPhoneNumber.length < 11) {
          setPhone(rawPhoneNumber)
          setIsVerified(false)
        } else {
          const formatedPhoneNumber = rawPhoneNumber.slice(0,11).replace(/^(\d{2})(\d{5})(\d{4})$/gi, "($1) $2-$3");
          setPhone(formatedPhoneNumber)
          setIsVerified(true)
        }
        break;
      case "cpf":
        const rawCpf = inputValue.replace(/\D/gi, "");
          if (rawCpf.length < 11) {
            setCpf(rawCpf)
            setIsVerified(false)
          } else {
            const formatedCpf = rawCpf.slice(0,11).replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/gi, "$1.$2.$3-$4");
            setCpf(formatedCpf)
            setIsVerified(true)
          }
        break;
      case "password":
        const rawNumber = inputValue.replace(/\D/gi, "");
        const passwordRegex = new RegExp(/(?!.*(.).*\1)\d{6}/, 'gi'); // check if has only unique values up to six numbers.

        if (passwordRegex.test(rawNumber)) {
          let tempIsVerified = true;
          rawNumber.split('').forEach((character, index, arr) => {
            if (index !== 0) {
              if (+character - 1 === +arr[index - 1]) {
                tempIsVerified = false;
              }
            }
          })
          setIsVerified(tempIsVerified);
        } else {
          setIsVerified(false)
        }
        setPassword(rawNumber);
        break;
      case "confirm_password":
        if (password === inputValue) {
          setIsVerified(true);
        } else {
          setIsVerified(false);
        }
        break;
      default:
        break;
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
    window.localStorage.removeItem('name')
    window.localStorage.removeItem('email')
    window.localStorage.removeItem('confirm_email')
    window.localStorage.removeItem('phone')
    window.localStorage.removeItem('cpf')
    window.localStorage.removeItem('password')
    window.localStorage.removeItem('confirm_password')
  }

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
        validateType={item.validateType}
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
    if (currentItem === 3) {
      setIsCodeSent(true);
    }
    
    if (currentItem === (steps.length - 1)) {
      setUploadPhoto(true);
    }
    
    if (currentItem <= steps.length) {
      setItems(prevState => [...prevState, steps[currentItem]])
      setCurrentItem(currentItem + 1)
      window.localStorage.setItem(
        steps[currentItem].validateType, 
        steps[currentItem].value
      )
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
          <PhotoStep handleClick={finishRegistration} />
        )}
        {steps && !isCodeSent && !uploadPhoto && handleCreateInput(steps[currentItem])}
      </div>
      {isCodeSent && !uploadPhoto && (
        <ButtonBlock verified={isAllowedToPass} handleNext={checkCode} />
      )} 
      {!isCodeSent && !uploadPhoto && (
        <ButtonBlock verified={isVerified} handleNext={nextStep} />
      )}
      <ProgressBar currentItem={currentItem} stepsLength={steps.length}/>
    </Container>
  );
}