import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
	selector: '[ngxClassworkMarginTop]',
})
export class MarginTopDirective {
	@Input() set ngxClassworkMarginTop(marginTop: number) {
		this.marginTop = marginTop;
	}

	@HostBinding('style.marginTop.px') marginTop: number = 0;
	@HostListener('click', ['$event.target', '$event']) click(target: HTMLElement, event: Event) {
		console.log(target, event);
	}
}
