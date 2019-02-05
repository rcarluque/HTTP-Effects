import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { UsuarioService } from '../../services/usuario.service';
import { map, switchMap, catchError } from 'rxjs/operators';
import { buscarActionsTypes, BuscarActions } from '../actions/buscar.actions';
import { Action } from '../../models/actions.model';
import { of } from 'rxjs';

@Injectable()
export class BuscarEffects {
  // El simbolo $ se utiliza para poder identificar rápidamente
  // que se trata de un observable
  constructor(
    private actions$: Actions,
    public usuarioService: UsuarioService,
    private buscarActions: BuscarActions) { }

  @Effect()
  buscarUsuario$ = this.actions$.pipe(
    ofType(buscarActionsTypes.BUSCAR),
    switchMap( (action: Action) => {
      return this.usuarioService.getUserById(action.payload).pipe(
        // Un efecto siempre debe devolver una acción.
        map( user => this.buscarActions.buscarUsuariosSuccess(user) ),
        // Convertimos el error para que retorne un observable en vez de una acción
        catchError( error => of(this.buscarActions.buscarUsuariosFail(error)) )
      );
    }),
  );

}