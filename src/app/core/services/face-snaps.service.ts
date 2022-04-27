import { map, Observable, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FaceSnap } from './../models/face-snap.model';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  constructor(private http: HttpClient) {}

   getAllFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }

  snapFaceSnapById(
    faceSnapId: number,
    snapType: 'Snap' | 'Unsnap'
  ): Observable<FaceSnap> {
    return this.getFaceSnapById(faceSnapId).pipe(
      map((fsnap) => ({
        ...fsnap,
        snaps: fsnap.snaps + (snapType === 'Snap' ? 1 : -1),
      })),
      switchMap((updatedFSnap) =>
        this.http.put<FaceSnap>(
          `http://localhost:3000/facesnaps/${faceSnapId}`,
          updatedFSnap
        )
      )
    );
  }

  getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
    return this.http.get<FaceSnap>(
      `http://localhost:3000/facesnaps/${faceSnapId}`
    );
  }

  addFaceSnap(formValue: {
    title: string;
    description: string;
    imageUrl: string;
    location?: string;
  }): Observable<FaceSnap> {
    return this.getAllFaceSnaps().pipe(
      // Tri par ID croissant
      map((faceSnaps) => [...faceSnaps].sort((fs1, fs2) => fs1.id - fs2.id)),
      // Récupération du plus haut ID (ID_MAX)
      map((sortedFaceSnaps) => sortedFaceSnaps[sortedFaceSnaps.length - 1]),
      // Création d'un nouveau FS avec un id = ID_MAX + 1
      map((previousFaceSnap) => ({
        ...formValue,
        snaps: 0,
        createdDate: new Date(),
        id: previousFaceSnap.id + 1,
      })),
      // Appel POST pour création
      switchMap((newFaceSnap) =>
        this.http.post<FaceSnap>(
          `http://localhost:3000/facesnaps/`,
          newFaceSnap
        )
      )
    );
  }
}
