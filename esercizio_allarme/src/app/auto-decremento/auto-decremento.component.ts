import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { Persona } from '../domain/Persona';
import { DatiService } from '../services/dati.service';

@Component({
  selector: 'app-auto-decremento',
  templateUrl: './auto-decremento.component.html',
  styleUrls: ['./auto-decremento.component.css']
})
export class AutoDecrementoComponent {

  statoPositivo:boolean=true;
  subject$?: Subject<Persona>;
  constructor(public dati:DatiService){
    
  }

  autoDec(){
    const autoSaveInterval = setInterval(() => {
      let persona: Persona ;
      persona= this.dati.getPersona();
      persona.importo-=10;
      this.dati.setPersona(persona);
      if (persona.importo <0){
        this.statoPositivo=false;
        this.dati.subject$.next(persona);
      }
      else{
        this.statoPositivo=true;
      }
    }, 1000);

  }
}
