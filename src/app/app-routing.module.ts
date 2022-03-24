import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () =>
			import('./pages/products-list/products-list.module').then((m) => m.ProductsListModule),
	},
	{
		path: 'product',
		loadChildren: () => import('./pages/product/product.module').then((m) => m.ProductModule),
	},
	{
		path: '**',
		redirectTo: '',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
