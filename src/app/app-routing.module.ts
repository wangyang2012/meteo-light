import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PrevisionComponent} from './component/prevision.component';

const routes: Routes = [
    {
        path: 'prevision',
        component: PrevisionComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
