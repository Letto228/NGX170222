import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'ngx-classwork-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
	user: string = '';
	navCaption = '';

	onInput(element: Event) {
		this.user = (element.target as HTMLInputElement).value;
	}

	ngOnInit() {
		setTimeout(() => {
			this.navCaption = 'caption';
		}, 2000);
	}
}
