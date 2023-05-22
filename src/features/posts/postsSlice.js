import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
	{ id: '1', title: 'First Post', content: 'Hello World!' },
	{ id: '2', title: 'Second Post', content: 'Chill Yolanda!' }
]

const postsSlice = createSlice({
	name: 'Posts',
	initialState,
	reducers: {
		postAdded: {
			reducer(state, action) {
				state.push(action.payload)
			},
			prepare(title, content) {
				return {
					payload: {
						id: nanoid(),
						title,
						content
					}
				}
			}
		}
	}
})

export const selectAllPosts = (state) => state.posts

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer
