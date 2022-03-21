import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interface/user';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'ngx-classwork-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
	@Output() clickMenu = new EventEmitter<void>();

	user$!: Observable<IUser>;

	constructor(private userService: UserService) {}

	ngOnInit() {
		this.user$ = this.userService.getUser$();
	}

	trackById(_: number, sum: { id: string }): string {
		return sum.id;
	}
}
