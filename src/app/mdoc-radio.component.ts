import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mdoc-radio',
  template: `
  <input type="radio" /> {{title}}
  `,
})
export class MdocRadioComponent {
  @Input() title: string = '';
}
