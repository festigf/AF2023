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
  title = 'esercizio2';
  messaggioDiSaluto: string = "";
  contatore: number = 0;
  visualizza: boolean = false;
  posts$?: Observable<Post[]>;
  datiPosts: Post[] = [];
  //dichiarazione dell'oggetto datiService, di tipo DatiService,
  //con riferimento al service istanziato dal framework.

  constructor(private datiService: DatiService) {
    this.posts$ = this.datiService.posts$; // stateless
    // this.datiService.posts$.subscribe(
    //   res => {
    //     this.datiPosts = res; // statefull
    //   })
    //this.messaggioDiSaluto= this.datiService.getSaluto();
    this.datiService.subject$.subscribe(
      res => {
        this.contatore = res;
      }
    )
  }

  //datiService: DatiService=new DatiService();

  onClick() {
    this.messaggioDiSaluto = this.datiService.getSaluto();
  }
  onInc() {
    this.datiService.inc();
    // this.datiService.subject$.next(this.datiService.getContatore());

    //this.contatore= this.datiService.getContatore();
  }
  gestoreEvento(valore: number) {
    this.contatore = valore;
  }

  onVisualizza() {
    this.visualizza = !this.visualizza;
  }
}
