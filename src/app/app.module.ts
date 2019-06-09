import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FacultadAddComponent } from './Facultad/add-facultad/facultad-add.component';
import { FacultadEditComponent } from './Facultad/edit-facultad/facultad-edit.component';
import { FacultadGetComponent } from './Facultad/get-facultad/facultad-get.component';
import { RolAddComponent } from './Rol/add-rol/rol-add.component';
import { RolEditComponent } from './Rol/edit-rol/rol-edit.component';
import { RolGetComponent } from './Rol/get-rol/rol-get.component';
import { ProgramaAddComponent } from './Programa/add-programa/programa-add.component';
import { ProgramaEditComponent } from './Programa/edit-programa/programa-edit.component';
import { ProgramaGetComponent } from './Programa/get-programa/programa-get.component';
import { UsuariosAddComponent } from './Usuarios/add-usuarios/usuarios-add.component';
import { UsuariosEditComponent } from './Usuarios/edit-usuarios/usuarios-edit.component';
import { UsuariosGetComponent } from './Usuarios/get-usuarios/usuarios-get.component';

import { ToastrModule } from 'ng6-toastr-notifications';
import { SidebarjsModule } from 'ng-sidebarjs';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FacultadService } from './services/facultad.service';
import { RolService } from './services/rol.service';
import { ProgramaService } from './services/programa.service';
import { UsuariosService } from './services/usuarios.service';


@NgModule({
  declarations: [
     HomeComponent,
    AppComponent,
FacultadAddComponent,
FacultadGetComponent,
FacultadEditComponent
,
RolAddComponent,
RolGetComponent,
RolEditComponent
,
ProgramaAddComponent,
ProgramaGetComponent,
ProgramaEditComponent
,
UsuariosAddComponent,
UsuariosGetComponent,
UsuariosEditComponent

  ],
  imports: [
    NgbModule,
    SidebarjsModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,
    ToastrModule.forRoot()
  ],
  providers: [
    FacultadService,
RolService,
ProgramaService,
UsuariosService

    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
