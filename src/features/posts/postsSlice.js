import { createSlice, nanoid } from '@reduxjs/toolkit'
import { sub } from 'date-fns'

const initialState = [
	{
		id: '1',
		title: 'First Post',
		content: 'Hello World!',
		date: sub(new Date(), { minutes: 10 }).toISOString()
	},
	{
		id: '2',
		title: 'Second Post',
		content: 'Chill Yolanda!',
		date: sub(new Date(), { minutes: 10 }).toISOString()
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
						userId
					}
				}
			}
		}
	}
})

export const selectAllPosts = (state) => state.posts

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer
