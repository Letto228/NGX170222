import { NgModule } from '@angular/core';
import { ProdictsFilterPipe } from './prodicts-filter.pipe';

@NgModule({
	declarations: [ProdictsFilterPipe],
	exports: [ProdictsFilterPipe],
})
export class PipesModule {}
