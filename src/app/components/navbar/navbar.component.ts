import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ContentChild,
	OnDestroy,
	OnInit,
	TemplateRef,
	ViewChild,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { interval, mapTo, Subject, takeUntil } from 'rxjs';

@Component({
	selector: 'ngx-classwork-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit, OnDestroy {
	@ViewChild('drawer', { static: true, read: MatDrawer })
	private drawer!: MatDrawer;

	@ContentChild('matListTemplate', { static: true, read: TemplateRef })
	matListTemplate!: TemplateRef<unknown>;

	private destroy$ = new Subject<void>();

	constructor(private changeDetactionRef: ChangeDetectorRef) {}

	user = {
		name: 'Egor',
	};

	ngOnInit() {
		interval(2000)
			.pipe(
				mapTo('Magomed'),
				takeUntil(this.destroy$),
			)
			.subscribe(name => {
				this.user.name = name;
				this.changeDetactionRef.markForCheck();
			})
	}

	toggleNavbar() {
		this.drawer.toggle();
		this.changeDetactionRef.markForCheck();
	}

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}
}
