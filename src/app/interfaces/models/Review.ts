import { IReview } from "../IReview";
import { IReviewContract } from "../contracts/IReviewContract";

export class Review implements IReview {
    image: string;
    name: string;
    rating: number;
    opinion: string;
    date: string | Date;

    constructor(reviewContract: IReviewContract) {
        this.image = reviewContract.image;
        this.name = reviewContract.name;
        this.rating = reviewContract.rating;
        this.opinion = reviewContract.opinion;
        this.date = reviewContract.date;
    }
}