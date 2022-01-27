import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatataComponent } from './primeiro-componente/primeiro-componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';

const routes: Routes = [{
    path: 'first',
    component: BatataComponent

},
{
    path: 'second',
    component: SegundoComponenteComponent

}];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PrimeiroRouterModule { }
