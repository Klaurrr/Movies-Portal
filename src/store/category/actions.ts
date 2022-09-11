import { Dispatch } from "redux"
import getDetail from "services/getDetail"
import { IStoreCategory } from "./types"


export const getFilmAction = (films: IStoreCategory['films']) => { 
    return {
        type: 'category/getFilm', 
        payload: films,
    }
}

export const loadFilm = () => async (dispatch: Dispatch) => { 
    try {
        const response = await getDetail("?q=animals");
        dispatch(getFilmAction(response.data));
    } catch (e) {
        console.log(e, 'произошла ошибка, строка 15');
    }
}

