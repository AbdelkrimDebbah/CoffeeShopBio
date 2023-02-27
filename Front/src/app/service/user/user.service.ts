import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from 'src/app/model/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private url = environment.API_URL
  
  constructor(
    private http: HttpClient

  ) { }

  getUsersInfo() {
    return this.http.get<user>(`${this.url}/user/me`)
  }

  getAllUsers() {
    return this.http.get<user[]>(`${this.url}/user`)
  }

  update(body: user) {
    return this.http.put(`${this.url}/user/${body.id}`, body)

  }

  delete(id: number) {
    return this.http.delete(`${this.url}/user/${id}`)
  

  }
}


