import { DOCUMENT } from '@angular/common';
import { forwardRef, inject, InjectionToken } from '@angular/core';
import { fromEvent } from 'rxjs';
import { AppModule } from '../app.module';
import { UserService } from '../services/user.service';

export const INJECTOR_NAME = new InjectionToken('Injector name');

export const USER_TOKEN = new InjectionToken('Application user', {
	providedIn: 'root',
	factory: () => inject(UserService).getUser$(),
});
export const APPLICATION_CLICK = new InjectionToken('APPLICATION CLICK', {
	providedIn: forwardRef(() => AppModule),
	factory: () => fromEvent(inject(DOCUMENT).documentElement, 'click'),
});
export const USER_TOKEN_UI = new InjectionToken('Application user');
