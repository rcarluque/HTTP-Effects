import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { Action } from '../../models/actions.model';

export const usuarioActions = {
  CARGAR: '[Usuarios] Cargando usuarios',
  CARGAR_SUCCESS: '[Usuarios] Carga completada',
  CARGAR_FAIL: '[Usuarios] Fallo en carga',
};

@Injectable({
  providedIn: 'root'
})
export class UsuarioActions {

  cargarUsuario(): Action {
    return {
      type: usuarioActions.CARGAR
    };
  }

  cargarUsuariosSuccess(usuarios: Usuario[]): Action {
    return {
      type: usuarioActions.CARGAR_SUCCESS,
      payload: usuarios
    };
  }

  cargarUsuariosFail(error: string): Action {
    return {
      type: usuarioActions.CARGAR_FAIL,
      payload: error
    };
  }

}
