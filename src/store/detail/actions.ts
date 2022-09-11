import { Dispatch } from "redux";
import getDetail from "../../services/getDetail";
import { IStoreDetail } from "./types";

export const getDetailAction = (detailFilm: IStoreDetail) => {
   return {
      type: "detail/getDetail",
      payload: detailFilm,
   };
};



export const loadDetail = (value: string | undefined) => async (dispatch: Dispatch) => {
   try {
      const response = await getDetail('/' + value);
      dispatch(getDetailAction(response.data));
   } catch (e) {
      console.log(e, "error loadDetailFilmAction");
   }
};

