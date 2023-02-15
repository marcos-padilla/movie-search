import './App.css'
import Form from './components/Form'
import MovieList from './components/MovieList'
import { useState } from 'react'

export default function App() {
	const [movies, setMovies] = useState([])
	return (
		<div>
			<Form setMovies={setMovies} />
			<MovieList movies={movies} />
		</div>
	)
}
