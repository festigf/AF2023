import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { DatiService } from '../dati.service';
import { Libro } from '../libro';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @Input() libro:Libro= new Libro(); //this.iniLibro();
  @Output() fatto =new EventEmitter<boolean>();

  librofrm:FormGroup;

  constructor(public datiService:DatiService, public fb: FormBuilder) { 
    this.librofrm=fb.group(new Libro());
  }

  ngOnInit(): void {
    console.log(this.libro)
    this.librofrm= this.fb.group({
      id: [this.libro.id],
      'titolo':new FormControl(this.libro.titolo,[ Validators.required, Validators.minLength(4)]),
      'autore':new FormControl(this.libro.autore,[ Validators.required]),
      'prezzoCopertina':new FormControl([this.libro.prezzoCopertina])
    });
  }

  onSubmit(libro:Libro){
    if (this.libro.id!=0) // 
      this.datiService.update(libro).subscribe(res => 
        {
          this.fatto.emit(true);
         }//,
        // err =>{
        //   // gestione errore
        // }
        )
    else this.datiService.add(libro).subscribe(res => 
      {
        this.fatto.emit(true);
      })
  }

  annulla(){
    this.fatto.emit(false);
  }
}
