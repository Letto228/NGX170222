import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
	selector: 'ngx-classwork-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
	@Input() navTitle!: string;
	@Input() navCaption: string = '';

	@ViewChild('drawer', { static: true }) matDrawer!: MatDrawer;

	ngOnInit() {
		console.log(this.matDrawer);
	}
}
