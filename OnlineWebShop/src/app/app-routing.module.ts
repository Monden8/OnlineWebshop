import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { FrontpageComponent } from './Components/frontpage/frontpage.component';
import { RegisterComponent } from './Components/register/register.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    component: FrontpageComponent
  },
  // {
  //   path: 'submit',
  //   component: SubmitComponent
  // },
  // { path: ':channel', component: FrontpageComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
