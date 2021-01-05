import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import AddTransaction from './components/AddTransaction';
import IncomeList from './components/IncomeList';
import { GlobalContextProvider } from './context/GlobalState';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './scss/App.scss';
import logo from './img/logo_art.svg';

const App = () => {
  return (
    <GlobalContextProvider>
      <div className='container'>
        <div className='row my-sm-5 app border border-1 border-primary rounded-3'>
          <div className='col-md-4 bg-primary text-center'>
            <Header />
          </div>
          <div className='col-md-8'>
            <div className='row p-3'>
              <div className='d-flex justify-content-between py-3'>
                <h1 className='text-primary fw-light'>Galeno Fondos</h1>
                <img className='logo' src={logo} alt='logo' />
              </div>
              <div className='col-md-6 pb-3'>
                <AddTransaction />
                <Balance />
              </div>
              <div className='col-md-6'>
                <IncomeList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </GlobalContextProvider>
  );
};

export default App;
