import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'ngx-classwork-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	// encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {
	public title = 'My salary is';

	public titleClass = 'title';

	public imgSrc =
		'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/800px-Angular_full_color_logo.svg.png';

	public tag = this.domSanitizer.bypassSecurityTrustHtml('<span style="color:red">Angular</span>');

	public width = 50;

	private readonly salary = 3000;

	private readonly bonus = 1.2;

	public user: any = {
		name: 'Ihor',
	};

	public constructor(private readonly domSanitizer: DomSanitizer) {}

	public getSalary() {
		return Math.round(this.salary * this.bonus);
	}

	public getImgSrc(src: string, event: MouseEvent) {
		console.log(src);
		console.log(event);
	}

	public searchText(text: string, myDiv: HTMLElement) {
		console.log(text);
		console.log(myDiv);
		// public searchText(event: Event, myInput: any) {
		// const value = (event.target as HTMLInputElement).value;
		// console.log(value);
		// console.log(myInput);
	}
}
