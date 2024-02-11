import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClaimsRoutingModule } from './claims-routing.module';
import { ClaimsListComponent } from './pages/claims-list/claims-list.component';
import {SharedModule} from "../../../shared/shared.module";


@NgModule({
  declarations: [
    ClaimsListComponent
  ],
  imports: [
    CommonModule,
    ClaimsRoutingModule,
    SharedModule
  ]
})
export class ClaimsModule { }
