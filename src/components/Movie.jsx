export default function Movie({ movie }) {
	return (
		<li>
			<h1>{movie.title}</h1>
			<p>{movie.year}</p>
			<img src={movie.poster} alt={movie.title} />
		</li>
	)
}
