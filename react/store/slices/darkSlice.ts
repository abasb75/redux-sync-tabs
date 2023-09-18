import { createSlice } from "../../../src";

export interface DarkState {
  state: boolean,
}

const initialState: DarkState = {
  state: false,
}

export const darkSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    toggle: (state) => {
      state.state = !state.state
    },
  },

  /** cross tabs options */
  storagble:true,
  key:'dark',

})

export const { toggle } = darkSlice.actions

export default darkSlice.reducer