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


  private getRootUrl() {
    return environment.apiUrl + this.CITIES_URL;
  }

  private formatUrl(cityId){
    return this.getRootUrl() + '/' + cityId;
  }


  public getAll() {
    return this.http.get(environment.apiUrl + this.CITIES_URL);
  }


  public deleteOne(cityId) { 
    return this.http.delete(environment.apiUrl + this.CITIES_URL + '/' + cityId);
  }


  public getOne(cityId) {
    return this.http.get(environment.apiUrl + this.CITIES_URL + '/' + cityId);
  }

  public addOne(city) {
    return this.http.post(this.getRootUrl(), city);
  }

  public putOne(cityId, city) {
    return this.http.put(this.formatUrl(cityId), city);
  }


  public submit(city) {
     if(!city.id) {
      return this.addOne(city);
    }
      return this.putOne(city.id, city);
  }
}
