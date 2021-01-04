import React from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import AddTransaction from './components/AddTransaction'
import IncomeList from './components/IncomeList'
import { GlobalContextProvider } from './context/GlobalState'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './scss/App.scss'
import logo from './img/logo_art_W.svg'

const App = () => {
	return (
		<GlobalContextProvider>
			<div className='container'>
				<div className='row justify-content-md-center'>
					<div className='col col-md-4 bg-primary py-3'>
						<Header />
					</div>
					<img className='w-25' src={logo} alt='logo'/>
					<div className='col-md-4 py-3'>
						<AddTransaction />
						<Balance />
					</div>
					<div className='col-md-4 py-3'>
						<IncomeList />
					</div>
				</div>
			</div>
		</GlobalContextProvider>
	)
}

export default App
