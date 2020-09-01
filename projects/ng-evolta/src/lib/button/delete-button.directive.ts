import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { YesNoDialogComponent } from './yes-no-dialog.component';

@Directive({
  selector: 'button[evolta-delete-button]'
})
export class DeleteButtonDirective implements OnInit {

  @Input() title: string;
  @Input() message: string;

  @Output() confirm: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();

  constructor(private el: ElementRef,
              private button: MatButton,
              private dialog: MatDialog) {

  }

  public ngOnInit(): void {
    this.el.nativeElement.style.color = 'white';
    this.button.color = 'warn';
  }

  @HostListener('click')
  public click(): void {
    const dialogRef = this.dialog.open(YesNoDialogComponent, {
      width: '250px',
      data: {
        title: this.title ? this.title : 'Löschen',
        message: this.message ? this.message : 'Wollen Sie wirklich löschen'
      }
    });

    dialogRef.afterClosed()
      .subscribe(result => {
      if (result) {
          this.confirm.emit();
      } else {
          this.cancel.emit();
      }
    });
  }

}
