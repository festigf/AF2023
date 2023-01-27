import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatiService {
  messaggio: string="ciao ";
  constructor() { }

  getSaluto(messaggio_in: string){
    this.messaggio+=messaggio_in;
    return this.messaggio;
  }
}
