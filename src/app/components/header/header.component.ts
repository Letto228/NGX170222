import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { map, Observable, timer } from 'rxjs';

interface IUser {
	name: string;
	role: string;
	summ: number;
	format: string;
}

@Component({
	selector: 'ngx-classwork-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
	@Output() clickMenu = new EventEmitter<void>();

	user$!: Observable<IUser>;

	ngOnInit() {
		this.user$ = this.getUser$();
	}

	user = {
		name: 'Egor',
		role: 'Guest',
		summ: 1000,
		format: 'RUB',
	};

	private getUser$(): Observable<IUser> {
		return timer(2000).pipe(
			map(() => ({
				name: 'Egor',
				role: 'Guest',
				summ: 1000,
				format: 'RUB',
			})),
		);
	}

	toJSON(user: Object): string {
		console.log('toJSON');
		return JSON.stringify(user);
	}
}
