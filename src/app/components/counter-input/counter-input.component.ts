import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import {
	ControlValueAccessor,
	NG_VALIDATORS,
	NG_VALUE_ACCESSOR,
	ValidationErrors,
	Validator,
} from '@angular/forms';

@Component({
	selector: 'ngx-classwork-counter-input',
	templateUrl: './counter-input.component.html',
	styleUrls: ['./counter-input.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			multi: true,
			useExisting: CounterInputComponent,
		},
		{
			provide: NG_VALIDATORS,
			multi: true,
			useExisting: CounterInputComponent,
		},
	],
})
export class CounterInputComponent implements ControlValueAccessor, Validator {
	@Input() increment: number = 1;

	counter!: number;
	disabled: boolean = false;
	private touch: boolean = false;

	onChange = (_counter: number) => {};
	onTouch = () => {};

	onUp() {
		this.counter += this.increment;
		this.onChange(this.counter);
		this.marckTouch();
	}

	onDown() {
		this.counter -= this.increment;
		this.onChange(this.counter);
		this.marckTouch();
	}

	writeValue(counter: number) {
		this.counter = counter;
	}

	registerOnChange(cb: (counter: number) => {}) {
		this.onChange = cb;
	}

	registerOnTouched(cb: () => {}) {
		this.onTouch = cb;
	}

	marckTouch() {
		if (this.touch) {
			return;
		}

		this.touch = true;
		this.onTouch();
	}

	setDisabledState(isDisabled: boolean) {
		this.disabled = isDisabled;
	}

	validate(): ValidationErrors | null {
		return { error: 'error' };
	}
}
