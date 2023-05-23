import { createSlice, nanoid } from '@reduxjs/toolkit'
import { sub } from 'date-fns'

const initialState = [
	{
		id: '1',
		title: 'First Post',
		content: 'Hello World!',
		date: sub(new Date(), { minutes: 10 }).toISOString(),
		reactions: {
			thumbsUp: 0,
			wow: 0,
			heart: 0,
			rocket: 0,
			coffee: 0
		}
	},
	{
		id: '2',
		title: 'Second Post',
		content: 'Chill Yolanda!',
		date: sub(new Date(), { minutes: 15 }).toISOString(),
		reactions: {
			thumbsUp: 0,
			wow: 0,
			heart: 0,
			rocket: 0,
			coffee: 0
		}
	}
]

const postsSlice = createSlice({
	name: 'Posts',
	initialState,
	reducers: {
		postAdded: {
			reducer(state, action) {
				state.push(action.payload)
			},
			prepare(title, content, userId) {
				return {
					payload: {
						id: nanoid(),
						title,
						content,
						date: new Date().toISOString(),
						userId,
						reactions: {
							thumbsUp: 0,
							wow: 0,
							heart: 0,
							rocket: 0,
							coffee: 0
						}
					}
				}
			}
		}
	}
})

export const selectAllPosts = (state) => state.posts

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer
