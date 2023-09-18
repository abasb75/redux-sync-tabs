# What is Redux-Cross-Tabs?

Redux-Sync-Tabs is a Redux framework that helps to save states in browser storage and synchronize them in different browser tabs.

<image src="https://github.com/abasb75/redux-cross-tabs/blob/main/assets/multi-tab-screen.gif" alt="redux-cross-tabs package">

# Installation :

install with command line:
```sh
npm i @reduxjs/toolkit react-redux redux-sync-tabs
```

# define your slice

```javascript
// store/counterSlice.js

import { createSlice } from "redux-sync-tabs"; // not redux toolkit

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
  
  /** sync tabs options */
  storagble:true,  // if fale redux-sync-tabs ignore it to save on storage and cross tabs
  key:'counter',
  srorageKey:'custom keys',

})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer

```

and darkSlice :

```javascript
// store/darkSlice.js

import { createSlice } from "redux-sync-tabs";

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
```

# Create your store 

```javascript
// store/index.js

import { configureStore } from 'redux-sync-tabs';

import darkSlice from './darkSlice';
import counterSlice from './counterSlice';

export const store = configureStore({
  reducer: {
    counter:counterSlice,
    dark:darkSlice,
  },
});


```

