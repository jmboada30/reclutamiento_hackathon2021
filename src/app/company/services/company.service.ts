import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private companiesCollection: AngularFirestoreCollection<any>;

  companies:Observable<any[]>;

  constructor(private afs: AngularFirestore) {
    this.companiesCollection = this.afs.collection<any>('companies');
    this.onGetCompanies();
  }

  onGetCompanies() {
    try {
      this.companies = this.companiesCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => a.payload.doc.data()))
      )
    } catch (error) {
      console.error(error);
    }
  }

}
