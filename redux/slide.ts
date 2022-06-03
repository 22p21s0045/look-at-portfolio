import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { group } from 'console';
import type { Savetype } from './type';
const initialState:Savetype = {
    coin_pair:"THB_BTC",
    buy:0,
    amount:0,
    group:1
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
        update_amount: (state,action:PayloadAction<number>) => {
            return {...state,amount:action.payload}
        },
        update_group: (state,action:PayloadAction<number>) => {
            return {...state,group:action.payload}
        }
    }

})

export const {update_coin_pair,update_buy, update_group,update_amount} = saveSlice.actions;
export default saveSlice.reducer;
  