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

  private getRootUrl() {
    return environment.apiUrl + this.COUNTRY_URL;
  }

  private formatUrl(countryId){
    return this.getRootUrl() + '/' + countryId;
  }


  public getAll() {
    return this.http.get(environment.apiUrl + this.COUNTRY_URL);
  }


  public deleteOne(countryId) {
    return this.http.delete(environment.apiUrl + this.COUNTRY_URL + '/' + countryId);
  }


  public getOne(countryId) {
    return this.http.get(environment.apiUrl + this.COUNTRY_URL + '/' + countryId);
  }
  public addOne(country) {
    return this.http.post(this.getRootUrl(), country);
  }

  public putOne(countryId, country) {
    return this.http.put(this.formatUrl(countryId), country);
  }


  public submit(country) {
     if(!country.id) {
      return this.addOne(country);
    }
      return this.putOne(country.id, country);
  }
}
