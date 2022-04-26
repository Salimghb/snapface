import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NewFaceSnapComponent } from './new-face-snap/new-face-snap.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'create', component: NewFaceSnapComponent },
  { path: 'facesnaps', component: FaceSnapListComponent },
  { path: 'facesnaps/:id', component: SingleFaceSnapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
