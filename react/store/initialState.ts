interface State {
    counter:{
        counter:number,
    },
    dark:{
        dark:boolean,
    }
}

const initialState:State = {
    counter:{
        counter:0,
    },
    dark:{
        dark:false,
    },
};

export default initialState;
export type {State};