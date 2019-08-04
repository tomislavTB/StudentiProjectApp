import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private http: HttpClient
  ) { }

  private readonly STUDENT_URL = 'students';

  public getAll() {
    return this.http.get(environment.apiUrl + this.STUDENT_URL);
  }
}
