import { FormControl } from '@angular/forms';
import { IsStringDirective } from './is-string.directive';

describe('IsStringDirective', () => {
	const directive = new IsStringDirective();

	it('is number', () => {
		expect(directive.validate(new FormControl(123))).toEqual({
			ngxClassworkIsString: 'is not string',
		});
	});

	it('is string', () => {
		expect(directive.validate(new FormControl('string'))).toEqual(null);
	});
});
