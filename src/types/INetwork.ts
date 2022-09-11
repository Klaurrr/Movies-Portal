import { ICountry } from "./ICountry"

export interface INetwork {
    country?: ICountry,
	id?: number;
	name?: string;
	officialSite?: string;
}