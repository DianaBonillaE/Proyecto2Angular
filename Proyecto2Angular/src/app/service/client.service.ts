import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Client } from '../model/client.model';


@Injectable()
export class ClientService {

  httpOptions = {
    headers : new HttpHeaders({'Content-Type': 'application/json'})
};
  constructor(private http: HttpClient) {}


 private apiUrl:"https://localhost:44337/api/client";

  
  public insertClient(client: Client){
    return this.http.post(this.apiUrl,client);
  }

  public getAll(){
    console.log('entro');
    return this.http.get(this.apiUrl);
  }
}