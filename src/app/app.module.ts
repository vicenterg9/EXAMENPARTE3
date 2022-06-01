import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraGiranteComponent } from './barra-girante/barra-girante.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraGiranteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    BarraGiranteComponent
  ]
})
export class AppModule { }
