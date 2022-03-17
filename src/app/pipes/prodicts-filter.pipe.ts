import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../interface/product';

@Pipe({
	name: 'prodictsFilter',
})
export class ProdictsFilterPipe implements PipeTransform {
	transform(products: IProduct[], searchName: string): IProduct[] {
		return products.filter(({ name }) => name.includes(searchName));
	}
}
