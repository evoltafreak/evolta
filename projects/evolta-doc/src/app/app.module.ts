import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ButtonComponent } from './features/button/button.component';
import { EvoltaButtonModule } from '../../../evolta-lib/src/lib/button/evolta-button.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent
  ],
  imports: [
    ReactiveFormsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    EvoltaButtonModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
