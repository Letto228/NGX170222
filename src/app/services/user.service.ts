import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mapTo, Observable } from 'rxjs';
import { IUser } from '../interface/user';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	constructor(private http: HttpClient) {}

	getUser$(): Observable<IUser | null> {
		// return this.http.get<IUser>('/user');
		return this.http.get<IUser>('/user').pipe(mapTo(null));
	}
}
