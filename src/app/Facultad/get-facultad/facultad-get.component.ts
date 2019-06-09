import { Component, OnInit } from '@angular/core';
import Facultad from '../../models/Facultad';
import { FacultadService } from '../../services/facultad.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-facultad-get',
  templateUrl: './facultad-get.component.html',
  styleUrls: ['./facultad-get.component.css']
})

export class FacultadGetComponent implements OnInit {

  facultad: Facultad[];

  constructor( private bs: FacultadService, public toastr: ToastrManager) {}

  ngOnInit() {
    this.bs
      .getFacultad()
      .subscribe((data: Facultad[]) => {
        this.facultad = data;
    });
  }

  deleteFacultad(id) {
    this.bs.deleteFacultad(id).subscribe(res => {
      console.log('Deleted');
      this.bs
      .getFacultad()
      .subscribe((data: Facultad[]) => {
        this.facultad = data;
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

