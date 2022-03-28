import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketRoutingModule } from './basket-routing.module';
import { BasketComponent } from './basket.component';
import { BasketListComponent } from './basket-list/basket-list.component';
import { AddressComponent } from './address/address.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@NgModule({
	declarations: [BasketComponent, BasketListComponent, AddressComponent],
	imports: [CommonModule, BasketRoutingModule, MatButtonModule, MatListModule],
})
export class BasketModule {}
