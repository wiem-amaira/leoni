import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {
        path: 'private',
        loadChildren: () => import('../private/private.module').then((m) => m.PrivateModule)
      },
      {
        path: 'public',
        loadChildren: () => import('../public/public.module').then((m) => m.PublicModule)
      },
      {
        path: '',
        redirectTo: 'private'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
