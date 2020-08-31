import {
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  Input,
  OnChanges, OnInit,
  SimpleChanges,
  ViewContainerRef
} from '@angular/core';
import { MatButton } from '@angular/material/button';
import { SaveButtonTemplateComponent } from "./save-button.component";

@Directive({
  selector: 'button[evolta-button]'
})
export class SaveButtonDirective implements OnChanges {

  @Input() isLoading = false;

  constructor(private el: ElementRef,
              private button: MatButton,
              private viewContainerRef: ViewContainerRef,
              private componentFactoryResolver: ComponentFactoryResolver) {

  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.isLoading) {
      this.viewContainerRef.clear();
      if (this.isLoading) {
        this._createButtonTemplate(true);
      } else {
        this._createButtonTemplate(false);
      }
    }
  }

  private _createButtonTemplate(isLoading: boolean): void {
    const factory = this.componentFactoryResolver.resolveComponentFactory(SaveButtonTemplateComponent);
    const componentRef = this.viewContainerRef.createComponent(factory);
    const host = this.el.nativeElement;

    this.button.disabled = isLoading;
    this.button.color = 'primary';

    componentRef.instance.text = host.textContent;
    componentRef.instance.isLoading = isLoading;

    host.textContent = '';
    host.insertBefore(componentRef.location.nativeElement, host.firstChild);
  }

}
