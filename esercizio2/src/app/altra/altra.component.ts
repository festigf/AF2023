import { Component } from '@angular/core';
import { DatiService } from '../services/dati.service';

@Component({
  selector: 'app-altra',
  templateUrl: './altra.component.html',
  styleUrls: ['./altra.component.css']
})
export class AltraComponent {
  contatore:number=0;
  constructor(private datiService:DatiService){
  }
  onGetContatore(){
    this.contatore=this.datiService.getContatore();
  }
}
