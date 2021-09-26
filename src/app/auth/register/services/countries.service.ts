import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ResponseCountries } from '../interfaces/country.interface';

export interface CountriesDropdown {
  key: string;
  value: string;
}
@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private http: HttpClient) {}

  getCountries(): Observable<CountriesDropdown[]> {
    return this.http
      .get<ResponseCountries[]>(`https://restcountries.com/v3/all`)
      .pipe(
        map((data) => this.serializedCountries(data)),
        map((data) => this.sortCountries(data)),
        tap(console.log)
      );
  }

  serializedCountries(countries: ResponseCountries[]) {
    return countries.map((country) => ({
      key: country.cca2,
      value: country.name.common,
    }));
  }

  sortCountries(countries: CountriesDropdown[]) {
    return countries.sort((a, b) => {
      if (a.value > b.value) {
        return 1;
      }
      if (a.value < b.value) {
        return -1;
      }
      return 0;
    });
  }
}
