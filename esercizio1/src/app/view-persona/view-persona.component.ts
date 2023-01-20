import { Component , Input} from '@angular/core';
import { Persona } from '../domain/Persona';

@Component({
  selector: 'app-view-persona',
  templateUrl: './view-persona.component.html',
  styleUrls: ['./view-persona.component.css']
})
export class ViewPersonaComponent {
  @Input() persona!: Persona;

  
}
