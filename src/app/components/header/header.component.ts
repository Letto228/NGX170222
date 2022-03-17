import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { mapTo, Observable, timer } from 'rxjs';

interface IUser {
	name: string;
	role: string;
	shopSum: {
		id: number;
		value: number;
		format: string;
	}[];
}

@Component({
	selector: 'ngx-classwork-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
	@Output() clickMenu = new EventEmitter<void>();

	user$!: Observable<IUser>;

	@HostListener('click') click() {
		console.log('click');
	}

	products = [
		{
			id: '1',
			name: 'product 1',
		},
		{
			id: '2',
			name: 'product 2',
		},
		{
			id: '3',
			name: 'product 3',
		},
	];

	updProducts = [
		{
			id: '2',
			name: 'product 5',
		},
		{
			id: '6',
			name: 'product 6',
		},
		{
			id: '7',
			name: 'product 7',
		},
		{
			id: '8',
			name: 'product 8',
		},
	];

	ngOnInit() {
		this.user$ = this.getUser$();

		setTimeout(() => {
			// this.user$ = this.getUser$();
			this.products = [
				...this.products.reverse().map((obj) => ({ ...obj })),
				...this.updProducts,
			];
		}, 3000);
	}

	trackById(_: number, sum: { id: string }): string {
		return sum.id;
	}

	private getUser$(): Observable<IUser> {
		return timer(0).pipe(
			mapTo({
				name: 'Egor',
				role: 'Guest',
				shopSum: [
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
			}),
		);
	}

	toJSON(user: Object): string {
		console.log('toJSON');
		return JSON.stringify(user);
	}
}
