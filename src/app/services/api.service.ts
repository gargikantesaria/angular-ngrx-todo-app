import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'https://jsonplaceholder.typicode.com/todos';
    
  constructor(public http: HttpClient) {
  }

  get(params?: any, reqOpts?: any) {
    return this.http.get(this.url, reqOpts );
  }

  post(body: any, reqOpts?: any) {
    return this.http.post(this.url, body, reqOpts);
  }

  put(body: any, reqOpts?: any) {
    return this.http.put(`${this.url}/${body.id}`, body, reqOpts);
  }

  delete(data:any) {
    // let header = {
    //   headers: new HttpHeaders();
    //     .set('Content-Type', 'application/json'),
    //     body: body || {}
    // }
    return this.http.delete(`${this.url}/${data}`);
  }

  patch(body: any, reqOpts?: any) {
    return this.http.patch(this.url, body, reqOpts);
  }

}
