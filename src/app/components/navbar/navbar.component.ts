import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ContentChild,
	TemplateRef,
	ViewChild,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
	selector: 'ngx-classwork-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
	@ViewChild('drawer', { static: true, read: MatDrawer })
	private drawer!: MatDrawer;

	@ContentChild('matListTemplate', { static: true, read: TemplateRef })
	matListTemplate!: TemplateRef<unknown>;

	constructor(private changeDetactionRef: ChangeDetectorRef) {}

	toggleNavbar() {
		this.drawer.toggle();
		this.changeDetactionRef.markForCheck();
	}
}
