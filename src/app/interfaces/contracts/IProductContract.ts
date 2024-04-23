import { IReviewContract } from "./IReviewContract"

export interface IProductBaseContract {
    id: number,
    name: string,
    price: number,
    currency: string,
    rating: number,
    description: string,
    favorite: boolean
}

export interface SimilarProduct extends IProductBaseContract { }

export interface IProductContract extends IProductBaseContract {
    similarProducts: SimilarProduct[],
    reviews: IReviewContract[] | null;
    quantity: number;
}


