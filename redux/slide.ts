import {createSlice} from '@reduxjs/toolkit';
import type { Savetype } from './type';
const initialState:Savetype = {
    coin_pair:'',
    buy:0,
    amount:0
} 
export const saveSlice = createSlice({
    name: 'save',
    initialState,
    reducers:{
        save(state,action){
            return action.payload;
        }
    }
})


export default saveSlice.reducer;
  