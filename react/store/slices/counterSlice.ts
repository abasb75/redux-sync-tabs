import { createSlice } from "../../../src";

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
  },
  
  /** cross tabs options */
  storagble:true,
  key:'counter',

})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer