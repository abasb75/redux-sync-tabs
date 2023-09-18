import { AnyAction, Reducer, createSlice as toolkitCreateSlice } from "@reduxjs/toolkit";
import type { CrossTabSlice } from "./types";

export const PREFIX = 'redux-toolkit-cross-tabs-';

function createSlice(sliceOptions:any){

    const defaultOptions:CrossTabSlice = {
        storagble:false,
        key:'',
    }

    const crossTabsSliceOptions = {
        ...defaultOptions,
        ...sliceOptions,
    }

    console.log(crossTabsSliceOptions);
    if(!crossTabsSliceOptions.storagble){
        return toolkitCreateSlice(sliceOptions);
    }

    sliceOptions.reducers = {
        ...sliceOptions.reducers,
        reduxCrossTabsSliceu89u48943u4u:(state:unknown,replaceMentState:unknown)=>{
            state = replaceMentState;
        }
    }

    sliceOptions.initialState = createInitialState(sliceOptions.initialState , PREFIX+sliceOptions.key);

    const slice = toolkitCreateSlice(sliceOptions);

    slice.reducer = getCrossTabsReducer(slice.reducer , PREFIX+sliceOptions.key , slice.name , sliceOptions.initialState);

    return slice;

}

function getCrossTabsReducer<
A extends AnyAction
>(reducer:Reducer,storageKey:string,sliceName:string,initialState:any):any{
    return function crossReducer<S>(state:S=initialState,action:A):S{
        if(action.type === 'SYNC_DATA_REDUX_TOOLKIT_CROSS_TABS_SYNCS' && action.key === sliceName){
            return {
                ...state,
                ...action.payload,
            }
        }
        const finalState = reducer(state,action as AnyAction);
        try{
            const oldData:string = localStorage.getItem(storageKey) || '{}';
            const newDataObject = {
                key:sliceName,
                value:getSort(finalState),
            };
            const newData:string = JSON.stringify(newDataObject);
            if(oldData !== newData){
                localStorage.setItem(storageKey,newData);
            }
        }catch{
            
        }
        return finalState;
    }
}


function getSort<T extends {} & []>(unordered:T):T{
    return Object.keys(unordered).sort().reduce(
        (obj:any, key:any):any => { 
            obj[key] = unordered[key];
            return obj;
        },
        {}
    ) ;
}


function createInitialState<
T extends {}
>(
    initialState:T,
    storageKey:string
):T{
    try{
        const data = JSON.parse(localStorage.getItem(storageKey) || '');
        return data.value || initialState;
    }catch{
        return initialState;
    }
}

export default createSlice;