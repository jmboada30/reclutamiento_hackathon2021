import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Bootcamp } from './interfaces/bootcamp.interface';
import { SharedService } from '../shared/services/shared.service';

@Injectable({
  providedIn: 'root',
})
export class BootcampService {
  private bootcampCollection: AngularFirestoreCollection<Bootcamp>;
  public bootcamps: Observable<Bootcamp[]>;
  public bootcamp: Observable<Bootcamp>;

  constructor(private afs: AngularFirestore, private sharedSvc: SharedService) {
    this.bootcampCollection = afs.collection<any>('bootcamps');
    this.getAllsBootcamps();
  }

  getAllsBootcamps(): void {
    this.bootcamps = this.bootcampCollection
      .snapshotChanges()
      .pipe(
        map((actions) => actions.map((a) => a.payload.doc.data() as Bootcamp))
      );
  }

  async onCreateBootcamp(bootcamp: Bootcamp) {
    try {
      this.sharedSvc.showSpinner();
      const idDoc = this.afs.createId();
      const body = { idDoc, ...bootcamp };
      this.bootcampCollection
        .doc(idDoc)
        .set(body)
        .finally(() => this.sharedSvc.hideSpinner());
    } catch (error) {
      console.error(error);
    }
  }

  async onDeleteBootcamp(idBootcamp: string) {
    try {
      this.sharedSvc.showSpinner();
      this.bootcampCollection
        .doc(idBootcamp)
        .delete()
        .finally(() => this.sharedSvc.hideSpinner());
    } catch (error) {
      console.error(error);
    }
  }

  async onEditBootcamp(idDoc: string, newData: any) {
    try {
      this.sharedSvc.showSpinner();
      this.bootcampCollection
        .doc(idDoc)
        .set({ ...newData }, { merge: true })
        .finally(() => this.sharedSvc.hideSpinner());
    } catch (error) {
      console.error(error);
    }
  }

  getBootcampsByIdCompany(idCompany: string) {
    return this.afs
      .collection<Bootcamp>('bootcamps', (ref) =>
        ref.where('company.idCompany', '==', idCompany)
      )
      .snapshotChanges()
      .pipe(map((bootcamps) => bootcamps.map((a) => a.payload.doc.data())));
  }

  getBootcampById(idDoc: string) {
    return this.afs
      .collection<Bootcamp>('bootcamps', (ref) =>
        ref.where('idDoc', '==', idDoc)
      )
      .snapshotChanges()
      .pipe(map((resp) => resp[0].payload.doc.data()));
  }
}
