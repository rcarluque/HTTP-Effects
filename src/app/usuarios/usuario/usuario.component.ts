import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/appState.model';
import { BuscarActions } from '../../store/actions/buscar.actions';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  user: Usuario;
  isLoading: boolean;
  error: Error;

  constructor(
    private router: ActivatedRoute,
    private store: Store<AppState>,
    private buscarActions: BuscarActions) { }

  ngOnInit() {
    this.store.select('buscar').subscribe( data => {
      this.user = data.user;
      this.isLoading = data.loading;
      this.error = data.error;
    });

    this.router.params.subscribe( params => this.store.dispatch(this.buscarActions.buscarUsuario(params['id'])));
  }

}
