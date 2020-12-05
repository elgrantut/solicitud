import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const IncomeTransactions = ({ incomeTransaction }) => {
	const { deleteTransaction } = useContext(GlobalContext)
	return (
		<li className='list-group-item '>
			<span>{incomeTransaction.incomeText}: </span>
			<span>${incomeTransaction.incomeAmount}</span>
			{incomeTransaction.incomeIva ? (
				<span> / IVA: ${incomeTransaction.incomeIva}</span>
			) : null}
			{incomeTransaction.incomeAportes ? (
				<span> / Aportes: ${incomeTransaction.incomeAportes}</span>
			) : null}
			<button
				className='btn text-danger'
				onClick={() => deleteTransaction(incomeTransaction.id)}
			>
				<FontAwesomeIcon icon={faTimes} />
			</button>
		</li>
	)
}

export default IncomeTransactions
