import { IStoreCategory } from "./types";

export const selectDetails = (state: {reducerForDetailPage:IStoreCategory}):IStoreCategory["films"] => state.reducerForDetailPage.films;