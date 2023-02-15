import './App.css'
import Form from './components/Form'
import MovieList from './components/MovieList'
import { useState } from 'react'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

export default function App() {
	const { search, updateSearch, error } = useSearch()
	const { movies, loading, getMovies } = useMovies({ search })

	return (
		<div>
			<Form
				getMovies={getMovies}
				search={search}
				error={error}
				updateSearch={updateSearch}
			/>
			<MovieList movies={movies} />
		</div>
	)
}
