import results from '../mock/results.json'

export default function MovieList() {
	return (
		<div>
			{results.Response ? (
				<div>
					<ul>
						{results.Search.map((movie) => {
							return (
								<li key={movie.imdbID}>
									<h1>{movie.Title}</h1>
									<p>{movie.Year}</p>
									<img src={movie.Poster} alt={movie.Title} />
								</li>
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
