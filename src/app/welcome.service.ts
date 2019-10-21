import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  SERVER_URL = 'http://localhost:4200/api/';
  constructor(private httpClient: HttpClient) { }

  public getList() {
       return this.httpClient.get(this.SERVER_URL + 'list');
  }

  public getListUser(listId) {
       return this.httpClient.get(`${this.SERVER_URL + 'list'}/${listId}`);
  }
  // todo not part of requirements
  public createListUser(list: {id: number, EmailAddress: string, FirstName: string, LastName: string}) {
      return this.httpClient.post(`${this.SERVER_URL + 'list'}`, '{"delay":200}');
  }

  public deleteListUser(listId) {
      return this.httpClient.delete(`${this.SERVER_URL + 'list'}/${listId}`);
  }
  public updateListUser(list: {id: number, EmailAddress: string, FirstName: string, LastName: string}) {
      return this.httpClient.put(`${this.SERVER_URL + 'list'}/${list.id}`, list);
  }

}
