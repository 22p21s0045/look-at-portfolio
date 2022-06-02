import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { group } from 'console';
import type { Savetype } from './type';
const initialState:Savetype = {
    coin_pair:null,
    buy:0,
    amount:0,
    group:null
} 
export const saveSlice = createSlice({
    name: 'save',
    initialState,
    reducers:{
        update_coin_pair:(state,action:PayloadAction<string>)=>{
         return {...state,coin_pair:action.payload}
         
        },
        update_buy: (state,action:PayloadAction<number>) => {
            return {...state,buy:action.payload}
        },
        update_group: (state,action:PayloadAction<string>) => {
            return {...state,group:action.payload}
        }
    }

})

export const {update_coin_pair,update_buy, update_group} = saveSlice.actions;
export default saveSlice.reducer;
  