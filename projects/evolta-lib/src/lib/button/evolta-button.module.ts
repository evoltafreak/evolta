import { ModuleWithProviders, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SaveButtonDirective } from './save-button.directive';
import { SaveButtonTemplateComponent } from './save-button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    SaveButtonDirective,
    SaveButtonTemplateComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    SaveButtonDirective,
    SaveButtonTemplateComponent
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
