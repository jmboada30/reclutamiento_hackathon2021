import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { Bootcamp } from './interfaces/bootcamp.interface';

@Injectable({
  providedIn: 'root',
})
export class BootcampService {
  private bootcampCollection: AngularFirestoreCollection<Bootcamp>;
  public bootcamp: Observable<Bootcamp[]>;
  constructor(private afs: AngularFirestore) {
    this.bootcampCollection = afs.collection<any>('bootcamps');
      this.getbootcamps();
  }

  getbootcamps(): void{
    this.bootcamp = this.bootcampCollection.snapshotChanges().pipe( 
      map(actions => actions.map(a => a.payload.doc.data() as Bootcamp)));
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
