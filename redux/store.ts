import { configureStore } from '@reduxjs/toolkit'
import SaveReducer from './slide'
const store =  configureStore({
    reducer: {
        save: SaveReducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store