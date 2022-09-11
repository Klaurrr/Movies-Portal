import { Dispatch } from "redux"
import getFilms from "services/getFilms"
import { IStoreMain } from "./types"

export const getMainAction = (films: IStoreMain['films']) => { 
    return {
        type: "main/getMain",
        payload: films,
    }
}

export const loadMain = () => async (dispatch: Dispatch) => { 
    try {
        const response = await getFilms('girls');
        dispatch(getMainAction(response.data));
    } catch(e) {
        console.log(e, "ошибка mainAction");
    }
}