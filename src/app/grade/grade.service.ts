import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  constructor(
    private http: HttpClient
  ) { }

  private readonly GRADE_URL = 'grades';

  public getAll() {
    return this.http.get(environment.apiUrl + this.GRADE_URL);
  }
}
