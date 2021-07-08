import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { LoadingScreen } from './components/LoadingScreen';
import { Home } from './pages/Home';
import { Register } from './pages/Register'

import './global.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }, [])

  return (
    <>
      {isLoading ? (
       <LoadingScreen /> 
      ) : (
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/register" component={Register}/>
          </Switch>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
