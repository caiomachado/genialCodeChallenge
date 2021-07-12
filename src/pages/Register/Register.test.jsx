import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react'
import { Register }  from './index';

import { checkInputValueToVerify } from './ValidateFunctionTest';

it('Renders correctly', () => {
  render(<Register />)
  const input = screen.getByTestId('input-test')
  expect(input).toBeTruthy()
})

describe('Input value', () => {
  it('updates on change', () => {
    const { getByTestId } = render(<Register />)

    const input = getByTestId('input-test')

    fireEvent.change(input, {target: {value: "test"}})
    expect(input.value).toBe("test")
  })
})

describe('Input Name validation', () => {
  it('name validates', () => {
    const result = checkInputValueToVerify('Nome', 'name')
    expect(result).toBe(true);
  })

  it("name doesn't validate", () => {
    const result = checkInputValueToVerify('', 'name')
    expect(result).toBe(false);
  })
})

describe('Input Email validation', () => {
  it('email validates', () => {
    const result = checkInputValueToVerify('email@teste.com', 'email')
    expect(result).toBe(true);
  })

  it("email doesn't validate", () => {
    const result = checkInputValueToVerify('email@teste', 'email')
    expect(result).toBe(false);
  })
})

describe('Input Phone validation', () => {
  it('Phone validates', () => {
    const result = checkInputValueToVerify('12345678982', 'phone')
    expect(result).toBe(true);
  })

  it("Phone doesn't validate", () => {
    const result = checkInputValueToVerify('1234567898', 'phone')
    expect(result).toBe(false);
  })
})

describe('Input CPF validation', () => {
  it('cpf validates', () => {
    const result = checkInputValueToVerify('12345678982', 'cpf')
    expect(result).toBe(true);
  })

  it("cpf doesn't validate", () => {
    const result = checkInputValueToVerify('1234567898', 'cpf')
    expect(result).toBe(false);
  })
})

describe('Input Password validation', () => {
  it('Password validates', () => {
    const result = checkInputValueToVerify('142685', 'password')
    expect(result).toBe(true);
  })

  it("Password doesn't validate", () => {
    const result = checkInputValueToVerify('123456', 'password')
    expect(result).toBe(false);
  })
})