import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { addAddress, resetAddress } from 'src/app/store/actions/address.actions';
import { IState } from 'src/app/store/reducers';
import { addressFeatureSelector } from 'src/app/store/reducers/address.reducer';
import { IAddressState } from 'src/app/store/state/address.state';

@Component({
	selector: 'ngx-classwork-address',
	templateUrl: './address.component.html',
	styleUrls: ['./address.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressComponent {
	address$: Observable<IAddressState> = this.store.pipe(
		select(addressFeatureSelector),
		tap(address => {
			this.form.setValue(address);
		}),
	);
	form = this.formBuilder.group({
		contry: ['USA', [Validators.required]],
		street: [{ value: 'street', disabled: true }],
		homeInfo: this.formBuilder.group({
			number: 10,
			block: null,
		}),
	});

	constructor(
		private formBuilder: FormBuilder,
		private store: Store<IState>,
	) {}

	onPush() {
		this.store.dispatch(addAddress(this.form.getRawValue()));
	}

	onReset() {
		this.store.dispatch(resetAddress());
	}
}
