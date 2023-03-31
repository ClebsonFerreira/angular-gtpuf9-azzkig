import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mdoc-button',
  template: `
    <button (click)="openAlert()">{{title}}</button>
    <button (click)="close()">X</button>
  `,
})
export class MdocButtonComponent {
  @Input() title: string = '';
  @Output() closeEvent = new EventEmitter<string>();

  openAlert() {
    alert(this.title);
  }

  close() {
    this.closeEvent.emit(this.title);
  }
}
