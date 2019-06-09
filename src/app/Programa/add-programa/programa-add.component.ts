import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import Facultad from '../../models/Facultad';
import { ProgramaService } from '../../services/programa.service';
import { FacultadService } from '../../services/facultad.service';
import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-programa-add',
  templateUrl: './programa-add.component.html',
  styleUrls: ['./programa-add.component.css']
})
export class ProgramaAddComponent implements OnInit {
   Facultad: Facultad[];   angForm: FormGroup;
  constructor(
private FacultadSer: FacultadService,
   private fb: FormBuilder,
   private Programa_ser: ProgramaService,
   public toastr: ToastrManager) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
       nombre: ['', Validators.required ],
facultad: ['', Validators.required ]

    });
  }
  showSuccess() {
    this.toastr.successToastr('El registro fue creado.', 'Creado!');
}

 showError() {
    this.toastr.errorToastr('El registro fue borrado correctamente', 'Borrado');
}
  addPrograma(nombre, facultad ) {
    this.Programa_ser.addPrograma(nombre, facultad );
    this.angForm.reset();

    this.showSuccess();
  }

  ngOnInit() {
    this.FacultadSer
.getFacultad()
.subscribe((data: Facultad[]) => {
this.Facultad = data;
});
  }

}
