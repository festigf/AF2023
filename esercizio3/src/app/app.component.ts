import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './domain/Post';
import { DatiService } from './services/dati.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'esercizio3';

  posts$:Observable<Post[]>| undefined;
  
  constructor(private dati:DatiService){
    this.posts$=this.dati.posts$;
    }
}