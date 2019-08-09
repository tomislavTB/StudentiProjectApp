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


  public deleteOne(studentId) {
    return this.http.delete(environment.apiUrl + this.STUDENT_URL + '/' + studentId);
  }


  public getOne(studentId) {
    return this.http.get(environment.apiUrl + this.STUDENT_URL + '/' + studentId);
  }
}