import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatiService {
  messaggio: string="hello dal service";
  contatore: number=0;
  constructor() { }
  // metodo richiamabile da qualsiasi componente
  getSaluto(){
    return this.messaggio;
  }
  inc(){
    this.contatore++;
  }
  getContatore(){
    return this.contatore;
  }

}
