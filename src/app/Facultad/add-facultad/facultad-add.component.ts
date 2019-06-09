import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

import { FacultadService } from '../../services/facultad.service';

import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-facultad-add',
  templateUrl: './facultad-add.component.html',
  styleUrls: ['./facultad-add.component.css']
})
export class FacultadAddComponent implements OnInit {
      angForm: FormGroup;
  constructor(

   private fb: FormBuilder,
   private Facultad_ser: FacultadService,
   public toastr: ToastrManager) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
       nombre: ['', Validators.required ],
ubicacion: ['', Validators.required ],
descripcion: ['', Validators.required ]

    });
  }
  showSuccess() {
    this.toastr.successToastr('El registro fue creado.', 'Creado!');
}

 showError() {
    this.toastr.errorToastr('El registro fue borrado correctamente', 'Borrado');
}
  addFacultad(nombre, ubicacion, descripcion ) {
    this.Facultad_ser.addFacultad(nombre, ubicacion, descripcion );
    this.angForm.reset();

    this.showSuccess();
  }

  ngOnInit() {
      }

}
