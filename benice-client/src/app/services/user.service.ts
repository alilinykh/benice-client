import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string;

  constructor(public httpClient: HttpClient) {
    this.url = 'http://localhost:8080/';
  }

}
