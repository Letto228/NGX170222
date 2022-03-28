import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { LeaveGuard } from 'src/app/guards/leave.guard';
import { AddressComponent } from './address/address.component';
import { BasketListComponent } from './basket-list/basket-list.component';
import { BasketComponent } from './basket.component';

const routes: Routes = [
	{
		path: '',
		component: BasketComponent,
		children: [
			{
				path: 'basket-list',
				component: BasketListComponent,
			},
			{
				path: 'address',
				component: AddressComponent,
				canActivate: [AuthGuard],
				canDeactivate: [LeaveGuard],
				data: {
					isAuth: true,
				},
			},
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'basket-list',
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class BasketRoutingModule {}
