import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

import { FacultadService } from '../../services/facultad.service';

import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-facultad-edit',
  templateUrl: './facultad-edit.component.html',
  styleUrls: ['./facultad-edit.component.css']
})
export class FacultadEditComponent implements OnInit {
     angForm: FormGroup;
  facultad: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    public toastr: ToastrManager,
    private bs: FacultadService,
    private fb: FormBuilder) {
      this.createForm();
     }

  createForm() {
    this.angForm = this.fb.group({
        nombre: ['', Validators.required ],
ubicacion: ['', Validators.required ],
descripcion: ['', Validators.required ]
       });
    }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bs.editFacultad(params['id']).subscribe(res => {
        this.facultad = res;
      });
    });
        }
showInfo() {
  this.toastr.infoToastr('El registro fue actualizado', 'Actualizado');
}
  updateFacultad(nombre, ubicacion, descripcion ) {
   this.route.params.subscribe(params => {
      this.bs.updateFacultad(nombre, ubicacion, descripcion  , params['id']);
      this.showInfo();
      this.router.navigate(['facultad']);
   });
}
}
