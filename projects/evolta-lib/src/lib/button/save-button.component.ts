import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'save-button-template',
  template: `
    <div fxLayout="row" fxLayoutGap="5px" fxLayoutAlign="center center">
        <mat-spinner *ngIf="isLoading" diameter="25"></mat-spinner>
        <span>{{text}}</span>
    </div>
  `,
})
export class SaveButtonTemplateComponent implements OnInit {

  @Input() text: string;
  @Input() isLoading: boolean;

  constructor() { }

  ngOnInit(): void {

  }

}
