import { configureStore } from '@reduxjs/toolkit'
import SaveReducer from './slide'
export default configureStore({
    reducer: {
        save: SaveReducer
    }
})