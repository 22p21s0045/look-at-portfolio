import React from 'react'
import { Paper } from '@mui/material';
import axios from 'axios';
import {supabase} from '../login/supabaseClient'
const supabase_sum = async () =>{
  const { data, error } = await supabase.rpc('get_sum_buy')
  console.log(data)
  return data
}
function Graph_profit(data: any) {
  supabase_sum()
  return (
    <div>Graph_profit</div>
  )
}

export default Graph_profit