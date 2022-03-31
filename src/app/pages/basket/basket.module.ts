import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketRoutingModule } from './basket-routing.module';
import { BasketComponent } from './basket.component';
import { BasketListComponent } from './basket-list/basket-list.component';
import { AddressComponent } from './address/address.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IsStringModule } from 'src/app/directives/is-string/is-string.module';
import { IsStringAsyncModule } from 'src/app/directives/is-string-async/is-string-async.module';

@NgModule({
	declarations: [BasketComponent, BasketListComponent, AddressComponent],
	imports: [
		CommonModule,
		BasketRoutingModule,
		MatButtonModule,
		MatListModule,
		FormsModule,
		ReactiveFormsModule,
		IsStringModule,
		IsStringAsyncModule,
	],
})
export class BasketModule {}
