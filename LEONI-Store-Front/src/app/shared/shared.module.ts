import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import {PerfectScrollbarModule} from "ngx-perfect-scrollbar";
import {ReactiveFormsModule} from "@angular/forms";
import {TooltipModule} from "ngx-bootstrap/tooltip";
import {ProgressbarModule} from "ngx-bootstrap/progressbar";
import {PaginationModule} from "ngx-bootstrap/pagination";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    PerfectScrollbarModule,
    ReactiveFormsModule,
    TooltipModule.forRoot(),
    ProgressbarModule.forRoot(),
    PaginationModule.forRoot(),
    BsDropdownModule,
  ],
  exports: [
    PerfectScrollbarModule,
    ReactiveFormsModule,
    TooltipModule,
    ProgressbarModule,
    PaginationModule,
    BsDropdownModule,
  ],
})
export class SharedModule { }
