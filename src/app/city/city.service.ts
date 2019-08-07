import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(
    private http: HttpClient
  ) { }

  private readonly CITIES_URL = 'cities';

  public getAll() {
    return this.http.get(environment.apiUrl + this.CITIES_URL);
  }


  public deleteOne(cityId) {
    return this.http.delete(environment.apiUrl + this.CITIES_URL + '/' + cityId);
  }


  public getOne(cityId) {
    return this.http.get(environment.apiUrl + this.CITIES_URL + '/' + cityId);
  }
}

