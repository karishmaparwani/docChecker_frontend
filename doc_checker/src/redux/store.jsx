import { configureStore } from '@reduxjs/toolkit'
import reducer from './slicer'

export const store = configureStore({
    reducer: reducer

})