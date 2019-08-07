import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  constructor(
    private http: HttpClient
  ) { }

  private readonly DIVISION_URL = 'divisions';

  public getAll() {
    return this.http.get(environment.apiUrl + this.DIVISION_URL);
  }

  public deleteOne(divisionId) {
    return this.http.delete(environment.apiUrl + this.DIVISION_URL + '/' + divisionId);
  }


  public getOne(divisionId) {
    return this.http.get(environment.apiUrl + this.DIVISION_URL + '/' + divisionId);
  }
}
