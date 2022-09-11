import { IImage } from "./IImage";
import { INetwork } from "./INetwork";
import { IRating } from "./IRating";

export interface IShow {
    id?: string,
    image?: IImage,
    name?: string,
    premiered?: string,
    genres?: string[]
    network?: INetwork,
    rating?: IRating,
    summary?: string 
}

export default IShow;

