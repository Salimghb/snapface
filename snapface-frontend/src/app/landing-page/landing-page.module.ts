import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page.component';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [CommonModule, FormsModule],
  exports: [LandingPageComponent],
})
export class LandingPageModule {}
