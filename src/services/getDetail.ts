import axios from "axios";
import { AxiosResponse } from "axios";

const getDetail = (id:string | undefined):Promise<AxiosResponse> => axios.get('https://api.tvmaze.com/shows' + id); 

export default getDetail;
