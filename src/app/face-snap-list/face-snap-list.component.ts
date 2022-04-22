import { FaceSnapsService } from './../services/face-snaps.service';
import { Component, OnInit } from '@angular/core';

import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss'],
})
export class FaceSnapListComponent implements OnInit {
  myFaceSnaps!: FaceSnap[];

  constructor(private myFaceSnapService: FaceSnapsService) {

  }

  ngOnInit(): void {
    this.myFaceSnaps = this.myFaceSnapService.getAllFaceSnaps();
  }
}