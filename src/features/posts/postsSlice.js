import { createSlice } from '@reduxjs/toolkit'

const initialState = [
	{ id: '1', title: 'First Post', content: 'Hello World!' },
	{ id: '2', title: 'Second Post', content: 'Chill Yolanda!' }
]

const postsSlice = createSlice({
	name: 'Posts',
	initialState,
	reducers: {
		postAdded: (state, action) => {
			state.push(action.payload)
		}
	}
})

export const selectAllPosts = (state) => state.posts

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer
