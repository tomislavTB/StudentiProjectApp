import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(
    private http: HttpClient
  ) { }

  private readonly COURS_URL = 'courses';

  public getAll() {
    return this.http.get(environment.apiUrl + this.COURS_URL);
  }
}
