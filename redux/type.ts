interface Savetype {
  coin_pair: string;
  buy: number;
  amount: number;
}
interface State {
    Save:{
        coin_pair: string;
        buy: number;
        amount: number;
    }
    History:Array<Savetype>;
    
}
export type { Savetype ,State};
