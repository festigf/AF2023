import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AutoDecrementoComponent } from './auto-decremento/auto-decremento.component';
import { AllarmeComponent } from './allarme/allarme.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoDecrementoComponent,
    AllarmeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
