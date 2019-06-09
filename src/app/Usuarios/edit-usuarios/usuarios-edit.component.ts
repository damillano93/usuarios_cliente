import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import Programa from '../../models/Programa'; import Rol from '../../models/Rol';
import { UsuariosService } from '../../services/usuarios.service';
import { ProgramaService } from '../../services/programa.service'; import { RolService } from '../../services/rol.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-usuarios-edit',
  templateUrl: './usuarios-edit.component.html',
  styleUrls: ['./usuarios-edit.component.css']
})
export class UsuariosEditComponent implements OnInit {
  Programa: Programa[]; Rol: Rol[];   angForm: FormGroup;
  usuarios: any = {};

  constructor(private route: ActivatedRoute, private ProgramaSer: ProgramaService, private RolSer: RolService,
    private router: Router,
    public toastr: ToastrManager,
    private bs: UsuariosService,
    private fb: FormBuilder) {
      this.createForm();
     }

  createForm() {
    this.angForm = this.fb.group({
        nombre: ['', Validators.required ],
codigo_usuario: ['', Validators.required ],
email: ['', Validators.required ],
programa: ['', Validators.required ],
rol: ['', Validators.required ],
estado: ['', Validators.required ]
       });
    }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bs.editUsuarios(params['id']).subscribe(res => {
        this.usuarios = res;
      });
    });
     this.ProgramaSer
.getPrograma()
.subscribe((data: Programa[]) => {
this.Programa = data;
});
this.RolSer
.getRol()
.subscribe((data: Rol[]) => {
this.Rol = data;
});
   }
showInfo() {
  this.toastr.infoToastr('El registro fue actualizado', 'Actualizado');
}
  updateUsuarios(nombre, codigo_usuario, email, programa, rol, estado ) {
   this.route.params.subscribe(params => {
      this.bs.updateUsuarios(nombre, codigo_usuario, email, programa, rol, estado  , params['id']);
      this.showInfo();
      this.router.navigate(['usuarios']);
   });
}
}
