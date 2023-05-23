import { useDispatch, useSelector } from 'react-redux'
import { selectPostById } from './postsSlice'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'

const SinglePostPage = () => {
	// Retrieve the post id

	const post = useSelector((state) => selectPostById(state, postId))

	if (!post) {
		return (
			<section>
				<h2>Post Not Found</h2>
			</section>
		)
	}

	return <div>SinglePostPage</div>
}

export default SinglePostPage
