import { Component, ViewChild } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
	selector: 'ngx-classwork-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	user: string = '';
	navCaption = '';

	@ViewChild(NavbarComponent, { static: true })
	navbarComponent!: NavbarComponent;

	onMenuToggle() {
		this.navbarComponent.toggleNavbar();
	}

	onInput(element: Event) {
		this.user = (element.target as HTMLInputElement).value;
	}
}
