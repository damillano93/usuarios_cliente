import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

import { RolService } from '../../services/rol.service';

import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-rol-edit',
  templateUrl: './rol-edit.component.html',
  styleUrls: ['./rol-edit.component.css']
})
export class RolEditComponent implements OnInit {
     angForm: FormGroup;
  rol: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    public toastr: ToastrManager,
    private bs: RolService,
    private fb: FormBuilder) {
      this.createForm();
     }

  createForm() {
    this.angForm = this.fb.group({
        nombre: ['', Validators.required ],
perfil: ['', Validators.required ],
permisos: ['', Validators.required ]
       });
    }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bs.editRol(params['id']).subscribe(res => {
        this.rol = res;
      });
    });
        }
showInfo() {
  this.toastr.infoToastr('El registro fue actualizado', 'Actualizado');
}
  updateRol(nombre, perfil, permisos ) {
   this.route.params.subscribe(params => {
      this.bs.updateRol(nombre, perfil, permisos  , params['id']);
      this.showInfo();
      this.router.navigate(['rol']);
   });
}
}
