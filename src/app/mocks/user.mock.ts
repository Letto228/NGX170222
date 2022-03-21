import { IUser } from '../interface/user';

export const userMock: IUser = {
	name: 'Egor',
	role: 'Guest',
	bascketValue: [
		{
			id: 1,
			value: 1000,
			format: 'RUB',
		},
		{
			id: 2,
			value: 10,
			format: 'USD',
		},
		{
			id: 3,
			value: 9,
			format: 'EUR',
		},
	],
};
