import { useSelector } from 'react-redux'

const PostsList = () => {
	const posts = useSelector((state) => state.posts)

	return <div>PostsList</div>
}

export default PostsList
