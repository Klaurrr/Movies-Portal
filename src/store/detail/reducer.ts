import { AnyAction } from "redux";
import { IStoreDetail } from "./types";


const initialState = {  
   detailFilm: {
      id: undefined,
      image: undefined,
      name: undefined,
      premiered: undefined,
      network: undefined,
      genres: [''],
      rating: undefined,
      summary: undefined
   } 
};

     

const reducerForDetailFilm = (
   state: IStoreDetail = initialState,
   action: AnyAction
) => {
   switch (action.type) {
      case "detail/getDetail":
         return { ...state, detailFilm: {...action.payload}};
      default:
         return state;
   }
};

export default reducerForDetailFilm;
