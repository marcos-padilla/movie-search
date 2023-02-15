import './styles/form.scss'

export default function Form() {
	return (
		<div className='form'>
			<form>
				<input placeholder='Search movies' className='search-input' />
				<button className='button-submit'>Search</button>
			</form>
		</div>
	)
}
