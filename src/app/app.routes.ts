import { Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
  { path: '', component: LoginFormComponent }, // Ruta principal
  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '' } // Redirección para rutas no válidas
];
