import results from '../mock/results.json'
import Movie from './Movie'

export default function MovieList() {
	return (
		<div>
			{results.Response ? (
				<div>
					<ul>
						{results.Search.map((movie) => {
							return (
								<Movie
									key={movie.imdbID}
									movie={{
										title: movie.title,
										year: movie.Year,
										poster: movie.Poster,
									}}
								/>
							)
						})}
					</ul>
				</div>
			) : (
				<h1>No hay peliculas que mostrar</h1>
			)}
		</div>
	)
}
