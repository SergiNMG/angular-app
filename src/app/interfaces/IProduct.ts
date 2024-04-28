import { IReview } from "./IReview";
import { ISimilarProduct } from "./ISimilarProduct";

export interface IProduct {
    id: number,
    name: string,
    price: number,
    currency: string,
    rating: number,
    description: string,
    favorite: boolean,
    similarProducts: ISimilarProduct[] | null | undefined,
    reviews: IReview[] | null | undefined;
}