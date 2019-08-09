import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExecutorService {

  constructor(
    private http: HttpClient
  ) { }

  private readonly EXECUTOR_URL = 'executors';

  public getAll() {
    return this.http.get(environment.apiUrl + this.EXECUTOR_URL);
  }

  public deleteOne(executorId) {
    return this.http.delete(environment.apiUrl + this.EXECUTOR_URL + '/' + executorId);
  }


  public getOne(executorId) {
    return this.http.get(environment.apiUrl + this.EXECUTOR_URL + '/' + executorId);
  }
}