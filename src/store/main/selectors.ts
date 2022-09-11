import { IStoreMain } from "./types";

export const selectFilms = (state: {reducerForMainPage: IStoreMain}):IStoreMain["films"] => state.reducerForMainPage.films;