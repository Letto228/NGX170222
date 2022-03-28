import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanDeactivate,
	RouterStateSnapshot,
	UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class LeaveGuard<T> implements CanDeactivate<T> {
	canDeactivate(
		_component: T,
		_currentRoute: ActivatedRouteSnapshot,
		_urrentState: RouterStateSnapshot,
		_nextState?: RouterStateSnapshot,
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return window.prompt('Уверены? Если вы покинете страницу, данные будут потеряны') === 'Да';
	}
}
