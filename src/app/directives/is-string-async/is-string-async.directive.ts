import { ChangeDetectorRef, Directive } from '@angular/core';
import {
	AbstractControl,
	AsyncValidator,
	NG_ASYNC_VALIDATORS,
	ValidationErrors,
} from '@angular/forms';
import { mapTo, Observable, tap, timer } from 'rxjs';

@Directive({
	selector: '[ngxClassworkIsStringAsync]',
	providers: [
		{
			provide: NG_ASYNC_VALIDATORS,
			multi: true,
			useExisting: IsStringAsyncDirective,
		},
	],
})
export class IsStringAsyncDirective implements AsyncValidator {
	constructor(private changeDetectorRef: ChangeDetectorRef) {}

	validate(
		control: AbstractControl,
	): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
		return timer(3000).pipe(
			mapTo(Number(control.value) ? { ngxClassworkIsStringAsync: 'is not string' } : null),
			tap(() => {
				this.changeDetectorRef.markForCheck();
			}),
		);
	}
}
