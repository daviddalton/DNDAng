import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, config, map, Observable, tap, throwError} from "rxjs";
import {BaseConverter} from "../converters/base.converter";

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: HttpClient) { }

  protected get<T>(path: string, converter: BaseConverter<T>, options?: any): Observable<T> {
    const request =  this.http.get(`https://api.open5e.com/` + path, options);
    return this.send(request, converter, config);
  }
  // protected post(path: string, data: any, options?: any) {
  //   return this.http.post(`https://api.open5e.com/` + path, data, options);
  // }
  // protected put(path: string, data: any, options?: any) {
  //   return this.http.put(`https://api.open5e.com/` + path, data, options);
  // }
  // protected delete(path: string, options?: any) {
  //   return this.http.delete(`https://api.open5e.com/` + path, options);
  // }

  private send(request: Observable<any>, converter: BaseConverter<any>, config: any): Observable<any> {
    return request.pipe(
      catchError(error => throwError(error)),
      // tap(_ => console.log(_)),
      map(_ => converter?.fromJson(_))
    )
  }
}
