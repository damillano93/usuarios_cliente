import { Component, OnInit } from '@angular/core';
import Rol from '../../models/Rol';
import { RolService } from '../../services/rol.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-rol-get',
  templateUrl: './rol-get.component.html',
  styleUrls: ['./rol-get.component.css']
})

export class RolGetComponent implements OnInit {

  rol: Rol[];

  constructor( private bs: RolService, public toastr: ToastrManager) {}

  ngOnInit() {
    this.bs
      .getRol()
      .subscribe((data: Rol[]) => {
        this.rol = data;
    });
  }

  deleteRol(id) {
    this.bs.deleteRol(id).subscribe(res => {
      console.log('Deleted');
      this.bs
      .getRol()
      .subscribe((data: Rol[]) => {
        this.rol = data;
    });
      this.showDeleted();
    });
  }
  showSuccess() {
    this.toastr.successToastr('This is success toast.', 'Success!');
}

showDeleted() {
    this.toastr.errorToastr('El registro fue borrado correctamente', 'Borrado');
}

showWarning() {
    this.toastr.warningToastr('This is warning toast.', 'Alert!');
}

showInfo() {
    this.toastr.infoToastr('This is info toast.', 'Info');
}



showToast(position: any = 'top-left') {
    this.toastr.infoToastr('This is a toast.', 'Toast', {
        position: position
    });
}
}

