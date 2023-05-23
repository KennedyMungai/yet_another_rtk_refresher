import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = [
	{ id: '0', name: 'Kijana Mangaa' },
	{ id: '1', name: 'Mark Mendee' },
	{ id: '2', name: 'Vindio Sinema' }
]

const usersSlice = createSlice({
	name: 'Users',
	initialState,
	reducers: {}
})

export const selectAllUsers = (state) => state.users

export default usersSlice.reducer
