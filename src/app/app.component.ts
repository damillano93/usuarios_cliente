import { Component, OnInit } from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { SidebarjsService, SidebarConfig } from 'ng-sidebarjs';
import { FacultadService } from './services/facultad.service';
import { RolService } from './services/rol.service';
import { ProgramaService } from './services/programa.service';
import { UsuariosService } from './services/usuarios.service';


import { NavigationCancel,
        Event,
        NavigationEnd,
        NavigationError,
        NavigationStart,
        Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'usuarios';
  version;
  constructor(
    public readonly sidebarjsService: SidebarjsService,
    private _loadingBar: SlimLoadingBarService,
    private _router: Router,
    private FacultadSer: FacultadService,
    private RolSer: RolService, private ProgramaSer: ProgramaService, private UsuariosSer: UsuariosService) {
    this._router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }

  ngOnInit() {  }
  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this._loadingBar.start();
    }
    if (event instanceof NavigationEnd) {
      this._loadingBar.complete();
    }
    if (event instanceof NavigationCancel) {
      this._loadingBar.stop();
    }
    if (event instanceof NavigationError) {
      this._loadingBar.stop();
    }
  }
}
// hola hp
