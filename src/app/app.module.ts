import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CarouselDirective } from './directives/carousel.directive';
import { LetDirective } from './directives/let.directive';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseInterceptor } from './services/base.interceptor';
import { ErrorInterceptor } from './services/error.interceptor';
import { AppRoutingModule } from './app-routing.module';

//@ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const baseURL = environment.baseUrl;

@NgModule({
	declarations: [AppComponent, HeaderComponent, NavbarComponent, CarouselDirective, LetDirective],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatSidenavModule,
		MatListModule,
		MatProgressSpinnerModule,
		HttpClientModule,
		AppRoutingModule,
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: BaseInterceptor,
			multi: true,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ErrorInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
