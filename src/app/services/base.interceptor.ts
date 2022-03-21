import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class BaseInterceptor implements HttpInterceptor {
	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		console.log('BaseInterceptor send');
		return next
			.handle(
				request.clone({
					url: `https://490a72df-5591-4218-972e-dd480151f9c6.mock.pstmn.io${request.url}`,
				}),
			)
			.pipe(tap(() => console.log('BaseInterceptor - tap')));
	}
}
