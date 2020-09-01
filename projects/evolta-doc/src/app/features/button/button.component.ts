import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  public isLoading: boolean;
  public confirmed: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  public save(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  public confirm(): void {
    this.confirmed = true;
  }

  public cancel(): void {
    this.confirmed = false;
  }

}
