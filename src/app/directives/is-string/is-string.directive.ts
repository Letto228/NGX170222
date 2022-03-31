import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
	selector: '[ngxClassworkIsString]',
	providers: [
		{
			provide: NG_VALIDATORS,
			multi: true,
			useExisting: IsStringDirective,
		},
	],
})
export class IsStringDirective implements Validator {
	validate(control: AbstractControl): ValidationErrors | null {
		return Number(control.value) ? { ngxClassworkIsString: 'is not string' } : null;
	}
}
