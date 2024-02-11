import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { NavbarComponent } from './ui-segments/navbar/navbar.component';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './ui-segments/sidebar/sidebar.component';
import { FooterComponent } from './ui-segments/footer/footer.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    NavbarComponent,
    LayoutComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ]
})
export class LayoutModule { }
