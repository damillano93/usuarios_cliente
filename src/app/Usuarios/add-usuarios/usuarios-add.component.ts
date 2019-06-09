import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import Programa from '../../models/Programa'; import Rol from '../../models/Rol';
import { UsuariosService } from '../../services/usuarios.service';
import { ProgramaService } from '../../services/programa.service'; import { RolService } from '../../services/rol.service';
import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-usuarios-add',
  templateUrl: './usuarios-add.component.html',
  styleUrls: ['./usuarios-add.component.css']
})
export class UsuariosAddComponent implements OnInit {
   Programa: Programa[]; Rol: Rol[];   angForm: FormGroup;
  constructor(
private ProgramaSer: ProgramaService, private RolSer: RolService,
   private fb: FormBuilder,
   private Usuarios_ser: UsuariosService,
   public toastr: ToastrManager) {
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
  showSuccess() {
    this.toastr.successToastr('El registro fue creado.', 'Creado!');
}

 showError() {
    this.toastr.errorToastr('El registro fue borrado correctamente', 'Borrado');
}
  addUsuarios(nombre, codigo_usuario, email, programa, rol, estado ) {
    this.Usuarios_ser.addUsuarios(nombre, codigo_usuario, email, programa, rol, estado );
    this.angForm.reset();

    this.showSuccess();
  }

  ngOnInit() {
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

}
