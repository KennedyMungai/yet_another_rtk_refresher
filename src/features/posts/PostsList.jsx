import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddPostForm from './AddPostForm'
import {
	fetchPosts,
	getPostsError,
	getPostsStatus,
	selectAllPosts
} from './postsSlice'
import PostsExcerpt from './postsExcerpt'

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

	let content

	if (postsStatus === 'loading') {
		content = <p>Loading...</p>
	} else if (postsStatus === 'succeeded') {
		const orderedPosts = posts
			.slice()
			.sort((a, b) => b.date.localeCompare(a.date))
		content = orderedPosts.map((post) => (
			<PostsExcerpt key={post.id} post={post} />
		))
	} else if (postsStatus === 'failed') {
		content = <p>{error}</p>
	}

	return (
		<section>
			<h2>Posts</h2>
			<AddPostForm />
			{content}
		</section>
	)
}

export default PostsList
