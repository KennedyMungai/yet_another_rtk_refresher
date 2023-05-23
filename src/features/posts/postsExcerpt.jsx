import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'
import ReactionButtons from './ReactionButtons'
import TimeAgo from './TimeAgo'

const PostsExcerpt = ({ post }) => {
	return (
		<article>
			<h3>{post.title}</h3>
			<p className='excerpt'>{post.body.substring(0, 75)}...</p>
			<p className='postCredit'>
				<PostAuthor userId={post.user} />
				<TimeAgo timestamp={post.date} />
			</p>
			<ReactionButtons post={post} />
		</article>
	)
}

export default PostsExcerpt
