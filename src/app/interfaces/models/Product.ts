import { IProduct } from "../IProduct";
import { IProductContract, ISimilarProductContract } from "../contracts/IProductContract";
import { SimilarProduct } from "./SimilarProduct";
import { Review } from "./Review";
import { IReviewContract } from "../contracts/IReviewContract";

export class Product implements IProduct {
    id: number
    name: string;
    price: number;
    currency: string;
    rating: number;
    description: string;
    favorite: boolean;
    similarProducts: SimilarProduct[] | null | undefined;
    reviews: Review[] | null | undefined;


    constructor(productContract: IProductContract) {
        this.id = productContract.id,
            this.name = productContract.title,
            this.price = productContract.price,
            this.currency = productContract.currency,
            this.rating = productContract.rating,
            this.description = productContract.description,
            this.favorite = productContract.favorite,
            this.similarProducts = this.toSimilarProductsList(productContract.similarProducts),
            this.reviews = this.toReviewList(productContract.reviews)
    }

    toReviewList(iReviewContract?: IReviewContract[]): Review[] | null | undefined {
        return iReviewContract?.map((reviewContract) => new Review(reviewContract));
    }

    toSimilarProductsList(iSimilarProductContract: ISimilarProductContract[]): SimilarProduct[] | null | undefined {
        return iSimilarProductContract.map((similarProductContract) => new SimilarProduct(similarProductContract));
    }
}