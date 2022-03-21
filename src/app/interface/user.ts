export interface IUser {
	name: string;
	role: string;
	bascketValue: {
		id: number;
		value: number;
		format: string;
	}[];
}
