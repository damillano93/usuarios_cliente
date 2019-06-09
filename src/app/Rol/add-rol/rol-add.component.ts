import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

import { RolService } from '../../services/rol.service';

import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-rol-add',
  templateUrl: './rol-add.component.html',
  styleUrls: ['./rol-add.component.css']
})
export class RolAddComponent implements OnInit {
      angForm: FormGroup;
  constructor(

   private fb: FormBuilder,
   private Rol_ser: RolService,
   public toastr: ToastrManager) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
       nombre: ['', Validators.required ],
perfil: ['', Validators.required ],
permisos: ['', Validators.required ]

    });
  }
  showSuccess() {
    this.toastr.successToastr('El registro fue creado.', 'Creado!');
}

 showError() {
    this.toastr.errorToastr('El registro fue borrado correctamente', 'Borrado');
}
  addRol(nombre, perfil, permisos ) {
    this.Rol_ser.addRol(nombre, perfil, permisos );
    this.angForm.reset();

    this.showSuccess();
  }

  ngOnInit() {
      }

}
