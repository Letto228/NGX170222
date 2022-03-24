import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IUser } from '../interface/user';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	constructor(private http: HttpClient) {}

	getUser$(): Observable<IUser> {
		return this.http.get<{ data: IUser }>('/user').pipe(map(({ data }) => data));
	}
}
