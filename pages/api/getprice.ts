// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {supabase} from "../../components/login/supabaseClient";
const getdata = async () =>{
    const {data,error} = await supabase.from("Historys").select("coin_pair,amount")
    console.log(data)
    return data
}
const lastest_price = async() =>{
    const data = await fetch("https://api.bitkub.com/api/market/ticker")
    const json = await data.json()
    return json
}
type Data = {
  name: string
  sum:number
}

export default function handler(

  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const amount:any = getdata()
    const lastest_price_data:any = lastest_price()
    const sum = 0
    amount.forEach(element => {
        lastest_price_data.forEach(element2 => {
            if(element.coin_pair == element2[element.coin_pair]){
                sum += element.amount * element2.last
            }
        });
    });
   
 
    



  res.status(200).json({ name: 'John Doe', sum: sum });
}
