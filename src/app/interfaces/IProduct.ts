import { SimilarProduct } from "./contracts/IProductContract";
import { IReview } from "./IReview";

export interface IProduct {
    id: number,
    name: string,
    price: number,
    currency: string,
    rating: number,
    description: string,
    favorite: boolean,
    similarProducts: SimilarProduct[],
    reviews: IReview[] | null;
    quantity: number
}