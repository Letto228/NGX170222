import { FormControl } from '@angular/forms';
import { IsStringDirective } from './is-string.directive';

describe('IsStringDirective', () => {
	it('should create an instance', () => {
		const directive = new IsStringDirective();

		expect(directive).toBeTruthy();
		expect(directive.validate(new FormControl(123))).toEqual({
			ngxClassworkIsString: 'is not string',
		});
	});
});
