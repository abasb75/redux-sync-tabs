import { configureStore } from '../../src';

import darkSlice from './slices/darkSlice';
import counterSlice from './slices/counterSlice';

export const store = configureStore({
  reducer: {
    counter:counterSlice,
    dark:darkSlice,
  },
});



