import { AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
	selector: 'ngx-classwork-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewChecked {
	user: string = '';
	navCaption = '';

	@ViewChild(NavbarComponent, { static: true })
	navbarComponent!: NavbarComponent;

	onMenuToggle() {
		this.navbarComponent.drawer.toggle();
	}

	onInput(element: Event) {
		this.user = (element.target as HTMLInputElement).value;
	}

	ngOnInit() {
		setTimeout(() => {
			this.navCaption = 'Title';
			console.log(this.navCaption);
		}, 2000);
	}

	ngAfterViewChecked(): void {
		console.log('ngAfterViewChecked App');
	}
}
