import Movie from './Movie'
import './styles/movie-list.scss'
export default function MovieList({ movies }) {
	return (
		<div>
			{movies.Response ? (
				<div>
					<ul className='movie-list'>
						{movies.Search.map((movie) => {
							return (
								<Movie
									key={movie.imdbID}
									movie={{
										title: movie.Title,
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
