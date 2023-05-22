import { createSlice } from '@reduxjs/toolkit'

const initialState = [
	{ id: '1', title: 'First Post', content: 'Hello World!' },
	{ id: '2', title: 'Second Post', content: 'Chill Yolanda!' }
]

const postsSlice = createSlice({
	name: 'Posts',
	initialState,
	reducers: {}
})

export const selectAllPosts = (state) => state.posts

export default postsSlice.reducer
