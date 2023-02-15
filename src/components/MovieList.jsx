import Movie from './Movie'

export default function MovieList({ movies }) {
	return (
		<div>
			{movies.Response ? (
				<div>
					<ul>
						{movies.Search.map((movie) => {
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
