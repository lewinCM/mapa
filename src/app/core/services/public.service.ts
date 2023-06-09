import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class PublicService {
  baseUrl: string = 'https://api-teacher-app.up.railway.app/api/public/teachers';
  constructor(private httpClient: HttpClient) { }

  getAll(): Promise<any> {
    return lastValueFrom(this.httpClient.get<any>(`${this.baseUrl}`));
  }

  getById(userId: string): Promise<any> {
    return lastValueFrom(this.httpClient.get<any>(`${this.baseUrl}/${userId}`));
  }

  create(user: User): Promise<User> {
    return lastValueFrom(this.httpClient.post<User>(this.baseUrl, user));
  }

  update(user: User): Promise<User> {
    return lastValueFrom(this.httpClient.put<User>(`${this.baseUrl}/${user.id_user}`, user));
  }

  delete(userId: string): Promise<any> {
    return lastValueFrom(this.httpClient.delete<any>(`${this.baseUrl}/${userId}`));
  }
}
