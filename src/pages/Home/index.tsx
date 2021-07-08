import React from 'react';
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { Container } from './styles';

const useStyles = makeStyles({
  filled: {
    backgroundColor: 'white',
    color: '#060a23',
    borderRadius: 100,
    height: 48,
    fontSize: 14,
    fontWeight: 600
  },
  empty: {
    backgroundColor: 'transparent',
    color: 'white',
    borderRadius: 100,
    border: '1px solid white',
    height: 48,
    fontSize: 14,
    fontWeight: 600
  }
})

export const Home: React.FC = () => {
  const history = useHistory();
  const classes = useStyles()

  function redirectToRegistration() {
    history.push('/register')
  }

  return (
    <Container>
      <div className="overlay" />
      <div className="action-wrapper">
        <h1>Sua Conta Genial</h1>
        <p>
          A conta 100% grátis que traz seus investimentos 
          para o centro da sua vida financeira.
        </p>
        <div className="buttons-wrapper">
          <Button 
            className={`${classes.filled} filled`} 
            onClick={redirectToRegistration}
          >
            Quero abrir uma conta
          </Button>
          <Button className={`${classes.empty} empty`}>Já sou cliente</Button>
        </div>
      </div>
    </Container>
  );
}