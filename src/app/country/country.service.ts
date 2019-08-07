import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
    private http: HttpClient
  ) { }

  private readonly COUNTRY_URL = 'countries';

  public getAll() {
    return this.http.get(environment.apiUrl + this.COUNTRY_URL);
  }


  public deleteOne(countryId) {
    return this.http.delete(environment.apiUrl + this.COUNTRY_URL + '/' + countryId);
  }


  public getOne(countryId) {
    return this.http.get(environment.apiUrl + this.COUNTRY_URL + '/' + countryId);
  }
}
