import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioActions } from '../../store/actions/usuarios.actions';
import { AppState } from 'src/app/models/appState.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  users: Usuario[] = [];
  loading: boolean;
  error: any;

  constructor(private store: Store<AppState>, private usuarioActions: UsuarioActions) { }

  ngOnInit() {
    this.store.select('usuarios').subscribe( data => {
      this.users = data.users;
      this.loading = data.loading;
      this.error = data.error;
    });

    this.store.dispatch(this.usuarioActions.cargarUsuario());
  }

}
