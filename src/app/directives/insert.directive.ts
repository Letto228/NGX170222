import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngxClassworkInsert]'
})
export class InsertDirective {
  @Input() ngxClassworkInsertFirst!: TemplateRef<unknown>;
  @Input() ngxClassworkInsertLast!: TemplateRef<unknown>;
  @Input() set ngxClassworkInsert(flag: any) {
    setTimeout(() => {
      if(flag && this.ngxClassworkInsertFirst) {
        this.viewContainerRef.createEmbeddedView(this.ngxClassworkInsertFirst);
  
        return;
      }
  
      if(!flag && this.ngxClassworkInsertLast) {
        this.viewContainerRef.createEmbeddedView(this.ngxClassworkInsertLast);
  
        return;
      }
    }, 0)
  }

  constructor(
    private viewContainerRef: ViewContainerRef,
  ) { }
}
