// app.routes.ts
import { Routes } from '@angular/router';
import { LoginPage } from './login/login-page/login-page';
import { DashboardHome } from './dashboard/dashboard-home/dashboard-home';
import { AuthGuard } from './auth-guard';


export const routes: Routes = [
  { path: 'login_page', component: LoginPage },
  { path: 'dashboard', component: DashboardHome ,canActivate: [AuthGuard]},
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
