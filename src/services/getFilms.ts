import axios from "axios";
import { AxiosResponse } from "axios";

const getFilms = (value: string):Promise<AxiosResponse> => axios.get(`https://api.tvmaze.com/search/shows?q=` + value);

export default getFilms;