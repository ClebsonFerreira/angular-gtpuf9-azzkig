import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MdocDynamicComponent } from './mdoc-dynamic.component';

@Component({
  selector: 'app-mdoc-radio',
  template: `
  <input type="radio" /> {{title}}
  <button (click)="closeComponent()">X</button>

  `,
})
export class MdocRadioComponent implements MdocDynamicComponent {
  @Input() title: string = '';
  @Output() close = new EventEmitter<string>();

  closeComponent(): void {
    this.close.emit(this.title);
  }
}
