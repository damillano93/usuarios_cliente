import { Component, OnInit } from '@angular/core';
import Programa from '../../models/Programa';
import { ProgramaService } from '../../services/programa.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-programa-get',
  templateUrl: './programa-get.component.html',
  styleUrls: ['./programa-get.component.css']
})

export class ProgramaGetComponent implements OnInit {

  programa: Programa[];

  constructor( private bs: ProgramaService, public toastr: ToastrManager) {}

  ngOnInit() {
    this.bs
      .getPrograma()
      .subscribe((data: Programa[]) => {
        this.programa = data;
    });
  }

  deletePrograma(id) {
    this.bs.deletePrograma(id).subscribe(res => {
      console.log('Deleted');
      this.bs
      .getPrograma()
      .subscribe((data: Programa[]) => {
        this.programa = data;
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

