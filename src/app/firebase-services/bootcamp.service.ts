import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators'

type Requirements = {
  title: string;
  description: string;
};
interface Bootcamp {
  title: string;
  totalMembers: number;
  description: string;
  duration: string;
  idCompany: string;
  idDoc?: string;
  requirements: Requirements[];
}

@Injectable({
  providedIn: 'root',
})
export class BootcampService {

  private bootcampCollection: AngularFirestoreCollection<any>;
  bootcamps:Observable<Bootcamp[]>;

  constructor(private afs: AngularFirestore) {
    this.bootcampCollection = this.afs.collection<any>('bootcamps');
    this.onGetBootcamps();
  }

  onGetBootcamps() {
    try {
      this.bootcamps = this.bootcampCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => a.payload.doc.data()))
      )
    } catch (error) {
      console.error(error);
    }
  }

  async onCreateBootcamp(bootcamp: Bootcamp): Promise<void> {
    try {
      const idDoc = this.afs.createId();
      const body = { idDoc, ...bootcamp };
      const result = await this.bootcampCollection.doc(idDoc).set(body);
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  async onDeleteBootcamp(idBootcamp: string): Promise<void> {
    try {
      const result = await this.bootcampCollection.doc(idBootcamp).delete();
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  async onEditBootcamp(idDoc: string, newData: any): Promise<void> {
    try {
      const result = await this.bootcampCollection
        .doc(idDoc)
        .set({ ...newData }, { merge: true });
      return result;
    } catch (error) {
      console.error(error);
    }
  }
}
