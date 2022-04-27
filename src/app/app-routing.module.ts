import { SingleFaceSnapComponent } from './face-snaps/components/single-face-snap/single-face-snap.component';
import { FaceSnapListComponent } from './face-snaps/components/face-snap-list/face-snap-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/components/landing-page.component';
import { NewFaceSnapComponent } from './face-snaps/components/new-face-snap/new-face-snap.component';

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
