import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddPostForm from './AddPostForm'
import PostAuthor from './PostAuthor'
import ReactionButtons from './ReactionButtons'
import TimeAgo from './TimeAgo'
import {
	fetchPosts,
	getPostsError,
	getPostsStatus,
	selectAllPosts
} from './postsSlice'

const PostsList = () => {
	const dispatch = useDispatch()

	const posts = useSelector(selectAllPosts)
	const error = useSelector(getPostsError)
	const postsStatus = useSelector(getPostsStatus)

	useEffect(() => {
		if (postsStatus === 'idle') {
			dispatch(fetchPosts())
		}
	}, [postsStatus, dispatch])

	const orderedPosts = posts
		.slice()
		.sort((a, b) => b.date.localeCompare(a.date))

	const renderedPosts = orderedPosts.map((post) => (
		<article key={post.id}>
			<h3>{post.title}</h3>
			<p>{post.content.substring(0, 100)}</p>
			<p className='postCredit'>
				<PostAuthor userId={post.user} />
				<TimeAgo timestamp={post.date} />
			</p>
			<ReactionButtons post={post} />
		</article>
	))

	return (
		<section>
			<h2>Posts</h2>
			<AddPostForm />
			{renderedPosts}
		</section>
	)
}

export default PostsList
