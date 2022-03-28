import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
	providedIn: 'root',
})
export class AuthGuard implements CanActivate {
	constructor(private userService: UserService) {}

	canActivate(
		activatedRouteSnapshot: ActivatedRouteSnapshot,
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		console.log(activatedRouteSnapshot.data);
		return this.userService.getUser$().pipe(map((user) => !user));
	}
}
