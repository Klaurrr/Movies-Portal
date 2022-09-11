import { Dispatch } from "redux"
import getFilms from "services/getFilms"
import { IStoreMain } from "./types"

export const getSearchAction = (films: IStoreMain['films']) => { 
    return {
        type: "search/getSearch",
        payload: films,
    }
}

export const loadSearch = (value: string) => async (dispatch: Dispatch) => { 
    try {
        const response = await getFilms(value);
        dispatch(getSearchAction(response.data));
    } catch(e) {
        console.log(e, "ошибка SearchAction");
    }
}