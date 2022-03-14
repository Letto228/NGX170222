import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'ngxClassworkJSON',
	pure: false,
})
export class JsonPipe implements PipeTransform {
	transform(value: Object): string {
		console.log('pipe');
		return JSON.stringify(value);
	}
}
