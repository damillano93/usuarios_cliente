import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import Facultad from '../../models/Facultad';
import { ProgramaService } from '../../services/programa.service';
import { FacultadService } from '../../services/facultad.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-programa-edit',
  templateUrl: './programa-edit.component.html',
  styleUrls: ['./programa-edit.component.css']
})
export class ProgramaEditComponent implements OnInit {
  Facultad: Facultad[];   angForm: FormGroup;
  programa: any = {};

  constructor(private route: ActivatedRoute, private FacultadSer: FacultadService,
    private router: Router,
    public toastr: ToastrManager,
    private bs: ProgramaService,
    private fb: FormBuilder) {
      this.createForm();
     }

  createForm() {
    this.angForm = this.fb.group({
        nombre: ['', Validators.required ],
facultad: ['', Validators.required ]
       });
    }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bs.editPrograma(params['id']).subscribe(res => {
        this.programa = res;
      });
    });
     this.FacultadSer
.getFacultad()
.subscribe((data: Facultad[]) => {
this.Facultad = data;
});
   }
showInfo() {
  this.toastr.infoToastr('El registro fue actualizado', 'Actualizado');
}
  updatePrograma(nombre, facultad ) {
   this.route.params.subscribe(params => {
      this.bs.updatePrograma(nombre, facultad  , params['id']);
      this.showInfo();
      this.router.navigate(['programa']);
   });
}
}
