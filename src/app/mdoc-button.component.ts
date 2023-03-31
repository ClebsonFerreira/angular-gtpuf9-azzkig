import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MdocDynamicComponent } from './mdoc-dynamic.component';

@Component({
  selector: 'app-mdoc-button',
  template: `
    <button (click)="openAlert()">{{title}}</button>
    <button (click)="closeComponent()">X</button>
  `,
})
export class MdocButtonComponent implements MdocDynamicComponent {
  @Input() title: string = '';
  @Output() close = new EventEmitter<string>();

  openAlert() {
    alert(this.title);
  }

  closeComponent() {
    this.close.emit(this.title);
  }
}
