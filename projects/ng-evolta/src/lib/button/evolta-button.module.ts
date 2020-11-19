import { ModuleWithProviders, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SaveButtonDirective } from './save-button.directive';
import { SaveButtonTemplateComponent } from './save-button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeleteButtonDirective } from './delete-button.directive';
import { MatDialogModule } from '@angular/material/dialog';
import { YesNoDialogComponent } from './yes-no-dialog.component';

@NgModule({
  declarations: [
    SaveButtonDirective,
    SaveButtonTemplateComponent,
    DeleteButtonDirective,
    YesNoDialogComponent
  ],
  imports: [
    FlexLayoutModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  exports: [
    FlexLayoutModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    SaveButtonDirective,
    SaveButtonTemplateComponent,
    DeleteButtonDirective,
    YesNoDialogComponent
  ],
  providers: []
})
export class EvoltaButtonModule {
  public static forRoot(): ModuleWithProviders<EvoltaButtonModule> {
    return {
      ngModule: EvoltaButtonModule
    };
  }
}
