import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatataComponent } from './primeiro-componente/primeiro-componente.component';
import { PrimeiroRouterModule } from './primeiro-modulo-routing.module';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';

@NgModule({
  declarations: [
    BatataComponent,
    SegundoComponenteComponent,
  ],
  imports: [
    CommonModule,
    PrimeiroRouterModule
  ]
})
export class PrimeiroModuloModule { }
