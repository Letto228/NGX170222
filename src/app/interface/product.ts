export interface IProduct {
	id: string;
	name: string;
	price: number;
	feedbacksCount: number;
	subCategory: string;
	images: {
		url: string;
		source: string;
	}[];
	rating: number;
	status: number;
}
