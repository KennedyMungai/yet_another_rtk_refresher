import { createSlice } from '@reduxjs/toolkit'

const initialState = { count: 0 }

const counterSlice = createSlice({
	name: 'Counter',
	initialState,
	reducers: {
		increment: (state) => {
			state.count++
		},
		decrement: (state) => {
			state.count--
		},
		incrementByAmount: (state, action) => {
			state.count += action.payload
		}
	}
})

export const { increment, decrement, incrementByAmount } = createSlice.actions

export default counterSlice.reducer
