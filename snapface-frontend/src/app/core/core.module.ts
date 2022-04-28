import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import * as fr from '@angular/common/locales/fr';
import { LOCALE_ID, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { httpInterceptorsProviders } from './interceptors';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, HttpClientModule],
  exports: [HeaderComponent],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR',
    },
    httpInterceptorsProviders,
  ],
})
export class CoreModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
