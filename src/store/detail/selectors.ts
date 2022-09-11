import { IStoreDetail } from "./types";

export const selectDetailsAboutFilm = (state:{reducerForDetailFilm:IStoreDetail}):IStoreDetail['detailFilm'] =>  state.reducerForDetailFilm.detailFilm;

