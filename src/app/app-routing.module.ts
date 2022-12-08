import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from "./guards/auth.guard";

import { InicioComponent } from './components/inicio/inicio.component';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { BaseDeDatosComponent } from './components/base-de-datos/base-de-datos.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';

const routes: Routes = [
  { path: 'inicio', component:InicioComponent},
  { path: 'encuesta', component:EncuestaComponent},
  { path: 'basededatos', component:BaseDeDatosComponent, canActivate: [AuthGuard]},
  { path: 'contactenos', component:ContactenosComponent},
  { path: 'nosotros', component:NosotrosComponent},
  { path: 'login', component:LoginComponent},
  { path: 'logout', component:LogoutComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
