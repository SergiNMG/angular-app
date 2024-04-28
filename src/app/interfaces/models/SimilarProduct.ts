import { ISimilarProduct } from "../ISimilarProduct";
import { ISimilarProductContract } from "../contracts/IProductContract";

export class SimilarProduct implements ISimilarProduct {
    id: number;
    name: string;
    price: number;
    currency: string;
    rating: number;
    description: string;
    favorite: boolean;

    constructor(similarProductContract: ISimilarProductContract) {
        this.id = similarProductContract.id;
        this.name = similarProductContract.title;
        this.price = similarProductContract.price;
        this.currency = similarProductContract.currency;
        this.rating = similarProductContract.rating;
        this.description = similarProductContract.description;
        this.favorite = similarProductContract.favorite;
    }
} 