import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterInputComponent } from './counter-input.component';

@NgModule({
	declarations: [CounterInputComponent],
	imports: [CommonModule],
	exports: [CounterInputComponent],
})
export class CounterInputModule {}
