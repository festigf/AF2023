import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AltraComponent } from './altra/altra.component';
import { EsempioEventoComponent } from './esempio-evento/esempio-evento.component';

@NgModule({
  declarations: [
    AppComponent,
    AltraComponent,
    EsempioEventoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
