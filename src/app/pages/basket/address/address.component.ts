import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'ngx-classwork-address',
	templateUrl: './address.component.html',
	styleUrls: ['./address.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressComponent {
	form = this.formBuilder.group({
		contry: ['USA', [Validators.required]],
		street: [{ value: 'street', disabled: true }],
		homeInfo: this.formBuilder.group({
			number: 10,
			block: null,
		}),
	});

	constructor(private formBuilder: FormBuilder) {}

	onPush() {
		console.log(this.form.value);
		console.log(this.form.getRawValue());
	}
}
