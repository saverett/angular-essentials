import {Injectable} from '@angular/core';
import {Headers, Response, Http} from '@angular/http';
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
// always import the source environment file; CLI takes care of switching
import {environment} from '../environments/environment';

@Injectable()
export class TodoService {
  static TODO_URI = environment.baseUri + 'todos';

  constructor(private http: Http) { }

  getTodos(): Observable<any> {
    return this.http.get(TodoService.TODO_URI,
        {headers: new Headers({'Accept': 'application/json'})})
      .map((response: Response) => response.json())
  }
}
