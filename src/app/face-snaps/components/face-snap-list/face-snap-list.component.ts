import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss'],
})
export class FaceSnapListComponent implements OnInit {
  myFaceSnaps$!: Observable<FaceSnap[]>;

  constructor(private myFaceSnapService: FaceSnapsService) {}

  ngOnInit(): void {
    this.myFaceSnaps$ = this.myFaceSnapService.getAllFaceSnaps();
  }
}
