import { createReducer, on } from "@ngrx/store";
import { initialstate } from "./counter.state";
import { decreament, increament, reset } from "./counter.action";

const _counterReducer = createReducer(
    initialstate,
    on( increament, (state) => {
        return {
            ...state,
            counter:state.counter + 1,
        };
    }),
    on( decreament, (state) => {
        return {
            ...state,
            counter:state.counter - 1,
        };
    }),
    on( reset, (state) => {
        return {
            ...state,
            counter: 0 ,
        };
    })
);

export function counterReducer(state : any,action :any){
    return _counterReducer(state,action);
}