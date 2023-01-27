import { Component } from '@angular/core';
import { DatiService } from './services/dati.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})
export class AppComponent {
  title = 'ripasso27';

  dati_senza_DI: DatiService= new DatiService();
  dati_senza_DI1: DatiService= new DatiService();
  constructor(private dati:DatiService){

  }

  onClick(){
    console.log(this.dati.getSaluto("ciao con di "));
  }
  onClick_senzaDI(){
    console.log(this.dati_senza_DI.getSaluto("ciao senza di" ));
  }

}
