import './styles/movie.scss'

export default function Movie({ movie }) {
	return (
		<li className='movie-card'>
			<div>
				<h2>{movie.title}</h2>
				<span>{movie.year}</span>
			</div>
			<img src={movie.image} alt={movie.title} />
		</li>
	)
}
