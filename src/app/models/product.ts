import { Review } from "./review"

export interface ProductBase{
    id: Number,
    name: String,
    price: number,
    currency: String,
    rating: Number,
    description: String;
}

export interface SimilarProduct extends ProductBase { }

export interface Product extends ProductBase {
    similarProducts: SimilarProduct[],
    reviews: Review[] | null;
}
