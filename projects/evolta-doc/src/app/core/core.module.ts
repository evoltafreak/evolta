import { LOCALE_ID, NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { registerLocaleData } from '@angular/common';
import localeDECH from '@angular/common/locales/de-CH';

localeDECH[13][1] = '\'';
registerLocaleData(localeDECH);

@NgModule({
  declarations: [],
  imports: [

  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'de-CH'},
    {provide: MAT_DATE_LOCALE, useValue: 'de-CH'}
  ]
})
export class CoreModule { }

