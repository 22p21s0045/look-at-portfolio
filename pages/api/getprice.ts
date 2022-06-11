// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createNextState } from "@reduxjs/toolkit";
import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../components/login/supabaseClient";
const getdata = async () => {
  const { data, error } = await supabase
    .from("Historys")
    .select("coin_pair,amount");
    

  return data;
};
const lastest_price = async () => {
  const data = await fetch("https://api.bitkub.com/api/market/ticker");
  const json = await data.json();
  return json;
};
type Data = {
  
  sum: number;
};

type Client_type = {
  coin_pair: string;
  amount: number;
}
type group_type = {
  [key: string]: Client_type|null;
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const amount:any = await getdata();
 
  const lastest_price_data: any = await lastest_price();

  let sum = 0;
  amount.forEach((element:Client_type) => {
    
    if ( Object.keys(lastest_price_data).includes(element.coin_pair)) {
      sum += element.amount * lastest_price_data[element.coin_pair].last;
    }
  });

  res.status(200).json({  sum: sum });
}
