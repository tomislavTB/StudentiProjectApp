import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(
    private http: HttpClient
  ) { }

  private readonly TEACHER_URL = 'teachers';

  public getAll() {
    return this.http.get(environment.apiUrl + this.TEACHER_URL);
  }
}

