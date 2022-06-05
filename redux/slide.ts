import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { supabase } from '../components/login/supabaseClient';
import { group } from 'console';
import type { Savetype } from './type';
const initialState:Savetype = {
    coin_pair:"THB_BTC",
    buy:0,
    amount:0,
    price:0,
    group:1,
    user_id:null,
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
        update_price: (state,action:PayloadAction<number>) => {
            return {...state,price:action.payload}
        },
        update_group: (state,action:PayloadAction<number>) => {
            return {...state,group:action.payload}
        },
        update_userid: (state,action:PayloadAction<string|null>) => {
            return {...state,user_id:action.payload}
        },
        clear_state: (state,action:PayloadAction<void>) => {
            return initialState
        }
    }

})

export const {update_coin_pair,update_buy, update_group,update_amount,update_price, update_userid,clear_state} = saveSlice.actions;
export default saveSlice.reducer;
  