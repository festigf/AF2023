import { Component } from '@angular/core';
import { DatiService } from './services/dati.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'esercizio2';
  messaggioDiSaluto: string="";
  contatore: number=0;
  //dichiarazione dell'oggetto datiService, di tipo DatiService,
  //con riferimento al service istanziato dal framework.
  constructor(private datiService: DatiService){
    //this.messaggioDiSaluto= this.datiService.getSaluto();
  }
  
  //datiService: DatiService=new DatiService();

  onClick(){
    this.messaggioDiSaluto= this.datiService.getSaluto();
  }
  onInc(){
    this.datiService.inc();
    this.contatore= this.datiService.getContatore();
  }
  gestoreEvento(valore:number){
    this.contatore=valore;
  }
}
