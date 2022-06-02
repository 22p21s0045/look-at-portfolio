interface Savetype {
  coin_pair: string|null;
  buy: number;
  amount: number;
  group:string|null; //nullable
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
