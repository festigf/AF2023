import { Component } from '@angular/core';
import { Persona } from './domain/Persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'esercizio1';
  persone : Persona[]=[];
  persona!: Persona;

  constructor(){
    this.persona={nominativo:"",importo:0};
    this.persone.push({nominativo:"eta beta",importo:10})
    this.persone.push({nominativo:"topolino",importo:-10})
  }

  add(persona:Persona){
    let copy = JSON.parse(JSON.stringify(persona)) as typeof persona;
    this.persone.push(copy);
  }
}
