import { IStoreMain } from "./types";

export const selectFilms = (state: {reducerForSearchPage: IStoreMain}):IStoreMain["films"] => state.reducerForSearchPage.films;