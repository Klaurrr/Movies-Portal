import {AnyAction} from "redux";
import { IStoreMain } from "./types";

const initialState = {
    films: [],
};

const reducerForSearchPage = (state: IStoreMain = initialState, action:AnyAction) => {
    switch(action.type) {
        case "search/getSearch" :
            return {...state, films: [...action.payload]}
        default:
            return state;
    }
}

export default reducerForSearchPage;