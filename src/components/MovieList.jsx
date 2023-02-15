import Movie from './Movie'
import './styles/movie-list.scss'

export default function MovieList({ movies }) {
	return (
		<div>
			{movies?.length > 0 ? (
				<ul className='movie-list'>
					{movies.map((movie) => {
						return <Movie key={movie.imdbID} movie={movie} />
					})}
				</ul>
			) : (
				<p
					style={{
						textAlign: 'center',
						fontSize: '2rem',
					}}
				>
					No se encontraron películas para esta búsqueda
				</p>
			)}
		</div>
	)
}
