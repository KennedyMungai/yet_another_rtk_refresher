import { useDispatch, useSelector } from 'react-redux'

function App() {
	const dispatch = useDispatch()
	const { count } = useSelector((state) => state.counter)

	return <main className='main'></main>
}

export default App
