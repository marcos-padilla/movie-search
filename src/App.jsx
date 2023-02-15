import results from './mock/results.json'
import './App.css'
export default function App() {
	return (
		<div>
			<form>
				<input placeholder='Search movies' className='search-input' />
				<button className='button-submit'>Search</button>
			</form>
		</div>
	)
}
