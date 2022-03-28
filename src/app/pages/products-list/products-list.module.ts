import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListRoutingModule } from './products-list-routing.module';
import { ProductsListComponent } from './products-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './card/card.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [ProductsListComponent, CardComponent],
	imports: [
		CommonModule,
		ProductsListRoutingModule,
		MatIconModule,
		MatInputModule,
		MatCardModule,
		MatProgressSpinnerModule,
		PipesModule,
		MatButtonModule,
	],
})
export class ProductsListModule {}
