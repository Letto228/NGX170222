import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
	selector: '[ngxClassworkLet]',
})
export class LetDirective {
	@Input() set ngxClassworkLet(value: unknown) {
		this.viewContainerRef.clear();
		this.viewContainerRef.createEmbeddedView(this.tempalteRef, {
			ngxClassworkLet: value,
		});
	}

	constructor(
		private viewContainerRef: ViewContainerRef,
		private tempalteRef: TemplateRef<unknown>,
	) {}
}
