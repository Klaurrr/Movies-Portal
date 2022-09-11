import {AnyAction} from "redux";
import { IStoreMain } from "./types";

const initialState = {
    films: [],
};

const reducerForMainPage = (state: IStoreMain = initialState, action:AnyAction) => {
    switch(action.type) {
        case "main/getMain" :
            return {...state, films: [...action.payload]}
        default:
            return state;
    }
}

export default reducerForMainPage;