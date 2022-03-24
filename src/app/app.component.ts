import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
	selector: 'ngx-classwork-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	@ViewChild(NavbarComponent, { static: true })
	navbarComponent!: NavbarComponent;

	onMenuToggle() {
		this.navbarComponent.toggleNavbar();
	}
}
