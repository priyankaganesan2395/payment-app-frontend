import { Routes } from '@angular/router';
import { Landing } from './landing/landing';
import { Payments } from './payments/payments';
import { LoginComponent } from './login/login';


export const routes: Routes = [
  { path: '', component: Landing },
 { path: 'login', component: LoginComponent },
  { path: 'payments', component: Payments }
];