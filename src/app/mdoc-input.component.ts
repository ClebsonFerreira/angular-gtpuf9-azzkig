import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MdocDynamicComponent } from './mdoc-dynamic.component';

@Component({
  selector: 'app-mdoc-input',
  template: `
  <input type="text" [placeholder]="title" />
  <button (click)="closeComponent()">X</button>
  `,
})
export class MdocInputComponent implements MdocDynamicComponent {
  @Input() title: string = '';
  @Output() close = new EventEmitter<string>();

  closeComponent() {
    this.close.emit(this.title);
  }
}
