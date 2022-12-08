import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { RouterModule} from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthGuard } from "./guards/auth.guard";

import { InicioComponent } from './components/inicio/inicio.component';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { BaseDeDatosComponent } from './components/base-de-datos/base-de-datos.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';

import { NgxSpinnerModule } from 'ngx-spinner';

import { ObtenerInfoService } from 'src/app/services/obtener-info.service';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EncuestaComponent,
    BaseDeDatosComponent,
    ContactenosComponent,
    LoginComponent,
    LogoutComponent,
    NosotrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    NgxSpinnerModule,
    HttpClientModule
  ],
  providers: [
    ObtenerInfoService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
    
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
