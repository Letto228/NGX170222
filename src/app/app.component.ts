import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IProduct } from './interface/product';
import { ProductsService } from './services/products.service';

@Component({
	selector: 'ngx-classwork-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
	searchText = '';

	@ViewChild(NavbarComponent, { static: true })
	navbarComponent!: NavbarComponent;

	products$!: Observable<IProduct[]>;

	constructor(private productsService: ProductsService) {}

	ngOnInit(): void {
		this.products$ = this.productsService.getProducts$();
	}

	onMenuToggle() {
		this.navbarComponent.toggleNavbar();
	}

	onInput(element: Event) {
		this.searchText = (element.target as HTMLInputElement).value;
	}
}
