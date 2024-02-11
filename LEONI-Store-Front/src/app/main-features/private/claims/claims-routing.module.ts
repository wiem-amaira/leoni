import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClaimsListComponent} from "./pages/claims-list/claims-list.component";

const routes: Routes = [
  {
    path: '',
    component: ClaimsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaimsRoutingModule { }
