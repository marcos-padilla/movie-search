import './styles/form.scss'
import { useState } from 'react'
import { API_URL } from '../constants'

export default function Form({ setMovies }) {
	const [search, setSearch] = useState('')
	const [error, setError] = useState(false)

	const handleSubmit = async (e) => {
		e.preventDefault()
		setError(false)
		fetch(`${API_URL}&s=${search}`)
			.then((resp) => resp.json())
			.then((resp) => {
				setMovies(resp)
			})
			.catch((err) => {
				setError('Se produjo un error en la busqueda')
			})
	}

	return (
		<div className='form'>
			<form onSubmit={handleSubmit}>
				<input
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					placeholder='Search movies'
					className='search-input'
				/>
				<button className='button-submit'>Search</button>
			</form>
			{error && <span className='error'>{error}</span>}
		</div>
	)
}
