import React, { useEffect, useState } from 'react';

import { Container } from './styles';

import verifiedImg from '../../assets/images/verified.svg';
import brazilianFlag from '../../assets/images/brazilian-flag.svg';
import dropDownArrow from '../../assets/images/dropdown-arrow.svg';

type InputProps = {
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

export const Input = ({
  value,
  labelText,
  placeholderText,
  infoText,
  infoTitle,
  infoList,
  inputType,
  validateType,
  handleChange,
  verified,
  toVerify
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    toVerify(value, validateType)
  }, [value, toVerify, validateType])
  
  return (
    <Container>
      {infoTitle && infoText && (
        <div className="step-information">
          <h1>{infoTitle}</h1>
          <p>{infoText}</p>
        </div>
      )}
      <div className={!verified && isFocused && value !== "" ? 'input-block error' : "input-block"}>
        <label className={value !== "" ? "input-filled" : ""}>{labelText}</label>
        {isFocused && inputType === "tel" && (
          <div className="dropdown-wrapper">
            <div className="flag-dropdown">
              <img src={brazilianFlag} alt="Zipcode Country Flag" />
              <img 
                src={dropDownArrow} 
                alt="Dropdown arrow" 
                onClick={() => alert("Lista não disponível no momento")}
              />
            </div>
            <span>|</span>
          </div>
        )}
        {verified && !isFocused && <img src={verifiedImg} alt="Verified" />}
        <input 
          type={inputType}
          placeholder={placeholderText}
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          data-testid="input-test"
        />
      </div>
      {infoList && 
        <ul className="list-of-tips">
          {infoList.map((listItem, index) => {
            return (
              <li key={index}>{listItem}</li>
            )
          })}
        </ul>
      }
    </Container>
  );
}