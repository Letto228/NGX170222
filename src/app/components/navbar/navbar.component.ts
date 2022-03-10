import {
	AfterViewChecked,
	ChangeDetectionStrategy,
	Component,
	ContentChild,
	Input,
	OnInit,
	TemplateRef,
	ViewChild,
	ViewContainerRef,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
	selector: 'ngx-classwork-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit, AfterViewChecked {
	@Input() navTitle!: string;
	@Input() navCaption: string = '';

	@ViewChild('matListViewPort', { static: true, read: ViewContainerRef })
	matListViewPort!: ViewContainerRef;
	@ViewChild('drawer', { static: true, read: MatDrawer })
	drawer!: MatDrawer;

	@ContentChild('matListTemplate', { static: true, read: TemplateRef })
	matListTemplate!: TemplateRef<unknown>;

	// constructor(private changeDetactionRef: ChangeDetectorRef) {}

	user = {
		name: 'Egor',
	};

	ngOnInit() {
		setTimeout(() => {
			this.user.name = 'Magomed';
			console.log(this.user.name);
		}, 1000);
		this.matListViewPort.createEmbeddedView(this.matListTemplate);
	}

	ngAfterViewChecked(): void {
		console.log('ngAfterViewChecked Navbar');
	}
}
