import { EventEmitter } from '@angular/core';

export interface MdocDynamicComponent {
  close: EventEmitter<string>;
}
