// import { useDispatch, useSelector } from 'react-redux'

import PostsList from './features/posts/PostsList'

function App() {
	// const dispatch = useDispatch()
	// const { count } = useSelector((state) => state.counter)

  return (
		<main className='main'>
			<PostsList />
		</main>
  )
}

export default App
