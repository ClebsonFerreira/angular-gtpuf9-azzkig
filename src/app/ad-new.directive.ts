import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[adNewHost]',
})
export class AdNewDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
