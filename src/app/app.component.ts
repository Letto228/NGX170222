import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { products } from './mocks/products.mock';

@Component({
	selector: 'ngx-classwork-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	searchText = '';

	@ViewChild(NavbarComponent, { static: true })
	navbarComponent!: NavbarComponent;

	readonly products = products;

	onMenuToggle() {
		this.navbarComponent.toggleNavbar();
	}

	onInput(element: Event) {
		this.searchText = (element.target as HTMLInputElement).value;
	}
}
