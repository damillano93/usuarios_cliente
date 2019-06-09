import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  {
  path: '',
  component: HomeComponent
},
  {
  path: 'facultad/create',
  component: FacultadAddComponent
},
{
  path: 'facultad/edit/:id',
  component: FacultadEditComponent
},
{
  path: 'facultad',
  component: FacultadGetComponent
},
{
  path: 'rol/create',
  component: RolAddComponent
},
{
  path: 'rol/edit/:id',
  component: RolEditComponent
},
{
  path: 'rol',
  component: RolGetComponent
},
{
  path: 'programa/create',
  component: ProgramaAddComponent
},
{
  path: 'programa/edit/:id',
  component: ProgramaEditComponent
},
{
  path: 'programa',
  component: ProgramaGetComponent
},
{
  path: 'usuarios/create',
  component: UsuariosAddComponent
},
{
  path: 'usuarios/edit/:id',
  component: UsuariosEditComponent
},
{
  path: 'usuarios',
  component: UsuariosGetComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
