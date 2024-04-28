import { IReviewContract } from "./IReviewContract"

export interface IProductBaseContract {
    id: number,
    title: string,
    price: number,
    currency: string,
    rating: number,
    description: string,
    favorite: boolean
}

export interface ISimilarProductContract extends IProductBaseContract { }

export interface IProductContract extends IProductBaseContract {
    similarProducts: ISimilarProductContract[],
    reviews: IReviewContract[];
}


