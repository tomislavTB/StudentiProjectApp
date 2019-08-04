import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CollegeService {

  constructor(
    private http: HttpClient
  ) { }

  private readonly COLLEGE_URL = 'colleges';

  public getAll() {
    return this.http.get(environment.apiUrl + this.COLLEGE_URL);
  }
}
