import { IProduct } from "../IProduct";
import { IProductContract, SimilarProduct } from "../contracts/IProductContract";
import { IReviewContract } from "../contracts/IReviewContract";

export class Product implements IProduct {
    id: number
    name: string;
    price: number;
    currency: string;
    rating: number;
    description: string;
    favorite: boolean;
    similarProducts: SimilarProduct[];
    reviews: IReviewContract[] | null;
    quantity: number;


    constructor(productContract: IProductContract) {
        this.id = productContract.id,
            this.name = productContract.name,
            this.price = productContract.price,
            this.currency = productContract.currency,
            this.rating = productContract.rating,
            this.description = productContract.description,
            this.favorite = productContract.favorite,
            this.similarProducts = productContract.similarProducts,
            this.reviews = productContract.reviews,
            this.quantity = productContract.quantity
    }
}