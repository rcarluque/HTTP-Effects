import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { usuarioActions as usuarioTypeActions, UsuarioActions } from '../actions/usuarios.actions';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuariosEffects {
  // El simbolo $ se utiliza para poder identificar rápidamente
  // que se trata de un observable
  constructor(
    private actions$: Actions,
    public usuarioService: UsuarioService,
    private usuarioActions: UsuarioActions) { }

  @Effect()
  cargarUsuarios$ = this.actions$.pipe(
    ofType(usuarioTypeActions.CARGAR),
    switchMap( () => {
      return this.usuarioService.getUsers().pipe(
        // Un efecto siempre debe devolver una acción.
        map( users => this.usuarioActions.cargarUsuariosSuccess(users) ),
        // Convertimos el error para que retorne un observable en vez de una acción
        catchError( error => of(this.usuarioActions.cargarUsuariosFail(error)) )
      );
    }),
  );

}

