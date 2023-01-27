import { Component } from '@angular/core';
import { Persona } from '../domain/Persona';
import { DatiService } from '../services/dati.service';

@Component({
  selector: 'app-allarme',
  templateUrl: './allarme.component.html',
  styleUrls: ['./allarme.component.css']
})
export class AllarmeComponent {
  // persona?: Persona;
  // isAllarme:boolean=false;
  constructor(public dati:DatiService){

    // this.dati.subject$.subscribe(
    //   res => {
      
    //     console.log(res);
    //     this.persona=res;
    //     this.isAllarme=true
    //   }
    // )
  }
}
