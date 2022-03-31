import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'ngx-classwork-address',
	templateUrl: './address.component.html',
	styleUrls: ['./address.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressComponent {
	address = {
		contry: 'USA',
		street: '',
		homeInfo: {
			number: '',
			block: '',
		},
	};

	onLog(ngForm: NgForm) {
		console.log(ngForm.value);
	}
}
