import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Post } from '../domain/Post';

@Injectable({
  providedIn: 'root'
})
export class DatiService {
  messaggio: string="hello dal service";
  contatore: number=0;
  // questo oggetto è un Observer/observable
  subject$=new Subject<number>();
  url:string="https://jsonplaceholder.typicode.com/posts";
  posts$ = new Observable<Post[]>();

  constructor(private http: HttpClient) {
    this.posts$= this.http.get<Post[]>(this.url);
  }
  // metodo richiamabile da qualsiasi componente
  getSaluto(){
    return this.messaggio;
  }
  inc(){
    this.contatore++;
    this.subject$.next(this.contatore);
  }
  getContatore(){
    return this.contatore;
  }

}
