import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../User';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string;


  constructor(public httpClient: HttpClient) {
    this.url = 'http://localhost:8080/';
  }

  public getUserById(id : number) {
   return this.httpClient.get<User>(this.url +"user/" + id)
  }

}
