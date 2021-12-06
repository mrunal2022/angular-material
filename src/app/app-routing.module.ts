import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: '/user', pathMatch: 'full' },


  {
    path: 'user', loadChildren: () => import('./user/user.module')
      .then(mod => mod.UserModule)
  },
  { path: '**', redirectTo: '/user' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
