import { API_URL } from '../constants'
import { useState, useCallback, useRef } from 'react'
import { searchMovies } from '../utils'

export function useMovies({ search }) {
	const [movies, setMovies] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)
	const previousSearch = useRef(search)

	const getMovies = useCallback(async ({ search }) => {
		if (search == previousSearch.current) return
		try {
			setLoading(true)
			setError(null)
			previousSearch.current = search
			const newMovies = await searchMovies({ search })
			setMovies(newMovies)
		} catch (e) {
			setError(e.message)
		} finally {
			setLoading(false)
		}
	}, [])

	return { movies, getMovies, loading }
}
