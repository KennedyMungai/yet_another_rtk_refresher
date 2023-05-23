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

	const orderedPosts = posts
		.slice()
		.sort((a, b) => b.date.localeCompare(a.date))

	const renderedPosts = orderedPosts.map((post) => (
		<PostsExcerpt post={post} key={post.id} />
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
