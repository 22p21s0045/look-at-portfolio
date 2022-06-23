interface DATA {
    buy:number
    created_at:string
    coin_pair:string
    amount:number
}
interface Greedy_data{
    value:number
    value_classification:string
    timestamp:string
}
interface Greedy_group{
    name:string
    data:Array<Greedy_data>

}
export type {DATA,Greedy_group}