import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroModuloModule } from './primeiro-modulo/primeiro-modulo.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    PrimeiroModuloModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
