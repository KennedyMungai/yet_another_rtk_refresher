import { useDispatch, useSelector } from 'react-redux'
import {
	decrement,
	increment,
	incrementByAmount
} from './features/counter/counterSlice'

function App() {
	const dispatch = useDispatch()
	const { count } = useSelector((state) => state.counter)

	return (
		<main>
			<p>{count}</p>
		</main>
	)
}

export default App
