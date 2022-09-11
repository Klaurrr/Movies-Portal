import {AnyAction} from "redux";
import { IStoreCategory } from "./types";

const initialState = {
    films: [],
};

const reducerForDetailPage = (state:IStoreCategory = initialState, action:AnyAction) => {
    switch(action.type) {
        case "category/getFilm" :
            return {...state, films: [...action.payload]}
        default:
            return state;
    }
}

export default reducerForDetailPage;