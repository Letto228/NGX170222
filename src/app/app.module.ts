import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { OnPushComponent } from './components/on-push/on-push.component';
import { JsonPipe } from './pipes/json.pipe';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { InsertDirective } from './directives/insert.directive';
import { ItemPageComponent } from './components/item-page/item-page.component';

//@ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const baseURL = environment.baseUrl;

/**
 *  NgModule => es6
 *  declarations => let/const
 *  imports => import
 *  exports = export
 */

@NgModule({
	declarations: [AppComponent, HeaderComponent, NavbarComponent, OnPushComponent, JsonPipe, InsertDirective, ItemPageComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatInputModule,
		MatSidenavModule,
		MatListModule,
		MatProgressSpinnerModule,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
