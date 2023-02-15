import './styles/form.scss'
import { useState } from 'react'
import { API_URL } from '../constants'

export default function Form({ getMovies, search, error, updateSearch }) {
	const handleSubmit = (e) => {
		e.preventDefault()
		getMovies({ search })
	}

	const handleChange = (e) => {
		const newSearch = e.target.value
		updateSearch(newSearch)
	}

	return (
		<div className='form'>
			<form onSubmit={handleSubmit}>
				<input
					value={search}
					onChange={handleChange}
					placeholder='Search movies'
					className='search-input'
					style={{
						border: '1px solid transparent',
						borderColor: error ? 'red' : 'transparent',
					}}
				/>
				<button className='button-submit'>Search</button>
			</form>
			{error && <span className='error'>{error}</span>}
		</div>
	)
}
