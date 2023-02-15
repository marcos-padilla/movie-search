import { API_URL } from './constants'

export const searchMovies = async ({ search }) => {
	if (search == '') return null
	try {
		const response = await fetch(`${API_URL}&s=${search}`)
		const json = await response.json()
		const movies = json.Search
		return movies?.map((movie) => {
			return {
				id: movie.imdbID,
				title: movie.Title,
				year: movie.Year,
				image: movie.Poster,
			}
		})
	} catch (e) {
		throw new Error('Erorr buscando peliculas')
	}
}
