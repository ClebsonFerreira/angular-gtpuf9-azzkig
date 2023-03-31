import {
  Component,
  ComponentRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AdNewDirective } from './ad-new.directive';
import { HeroJobAdComponent } from './hero-job-ad.component';
import { MdocButtonComponent } from './mdoc-button.component';
import { MdocDynamicComponent } from './mdoc-dynamic.component';
import { MdocInputComponent } from './mdoc-input.component';
import { MdocRadioComponent } from './mdoc-radio.component';

@Component({
  selector: 'app-ad-new',
  template: `
    <div class="conteudo">
    <div class="botoes">
      <h3 class="">Selecione um Elemento</h3>
      <button (click)="AddButtonComponent()">Botão</button>
      <button (click)="AddRadioComponent()">Radio</button>
      <button (click)="AddInputComponent()">Input</button>
      <button (click)="LimparTudo()">Limpar</button>
    </div >
    <div class="area">
      <ng-template  adNewHost></ng-template>
    </div>
    </div>
  `,
})
export class AdNewComponent {
  @ViewChild(AdNewDirective, { static: true }) adNewHost!: AdNewDirective;
  components = new Map<string, ComponentRef<MdocDynamicComponent>>();

  AddButtonComponent() {
    const viewContainerRef = this.adNewHost.viewContainerRef;
    const componentRef = viewContainerRef.createComponent(MdocButtonComponent);
    const title = `Botao ${Math.floor(Math.random() * 20)}`;
    componentRef.instance.title = title;
    this.components.set(title, componentRef);
    componentRef.instance.close.subscribe((event) =>
      this.deleteComponent(event)
    );
  }

  AddRadioComponent() {
    const viewContainerRef = this.adNewHost.viewContainerRef;
    const componentRef = viewContainerRef.createComponent(MdocRadioComponent);
    const title = `Radio ${Math.floor(Math.random() * 20)}`;
    componentRef.instance.title = title;
    this.components.set(title, componentRef);
    componentRef.instance.close.subscribe((event) =>
      this.deleteComponent(event)
    );
  }
  AddInputComponent() {
    const viewContainerRef = this.adNewHost.viewContainerRef;
    const componentRef = viewContainerRef.createComponent(MdocInputComponent);
    const title = `Input ${Math.floor(Math.random() * 20)}`;
    componentRef.instance.title = title;
    this.components.set(title, componentRef);
    componentRef.instance.close.subscribe((event) =>
      this.deleteComponent(event)
    );
  }

  deleteComponent(componentName: string) {
    if (this.components.has(componentName)) {
      this.components.get(componentName)?.destroy();
      this.components.delete(componentName);
    }
  }

  LimparTudo() {
    const viewContainerRef = this.adNewHost.viewContainerRef;
    viewContainerRef.clear();
  }
}
