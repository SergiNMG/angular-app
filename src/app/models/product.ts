import { Review } from "./review"

export interface ProductBase {
    id: number,
    name: string,
    price: number,
    currency: string,
    rating: number,
    description: string,
    favorite: boolean
}

export interface SimilarProduct extends ProductBase { }

export interface Product extends ProductBase {
    similarProducts: SimilarProduct[],
    reviews: Review[] | null;
    quantity: number
}
