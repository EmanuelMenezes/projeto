import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'primeiro',
  loadChildren: () =>
    import("./primeiro-modulo/primeiro-modulo.module").then((m) => m.PrimeiroModuloModule),
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
