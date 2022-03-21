import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		console.log('ErrorInterceptor send');
		return next.handle(request).pipe(tap(() => console.log('ErrorInterceptor - tap')));
	}
}
