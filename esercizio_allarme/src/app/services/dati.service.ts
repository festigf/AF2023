import { Injectable } from '@angular/core';
import { Persona } from '../domain/Persona';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatiService {
  subject$ = new Subject<Persona>();
  persona: Persona={nominativo: "Eta Beta",importo:30};
  constructor() { }

  getPersona(){
    return this.persona;
  }
  setPersona(persona : Persona){
    return this.persona=persona;
  }
}
