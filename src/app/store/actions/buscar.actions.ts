import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { Action } from '../../models/actions.model';

export const buscarActionsTypes = {
  BUSCAR: '[Buscar Usuario] Buscando usuario',
  BUSCAR_SUCCESS: '[Buscar Usuario] busqueda completada',
  BUSCAR_FAIL: '[Buscar Usuario] Fallo en la busqueda',
};

@Injectable({
  providedIn: 'root'
})
export class BuscarActions {

  buscarUsuario(id: string): Action {
    return {
      type: buscarActionsTypes.BUSCAR,
      payload: id
    };
  }

  buscarUsuariosSuccess(usuario: Usuario): Action {
    return {
      type: buscarActionsTypes.BUSCAR_SUCCESS,
      payload: usuario
    };
  }

  buscarUsuariosFail(error: string): Action {
    return {
      type: buscarActionsTypes.BUSCAR_FAIL,
      payload: error
    };
  }

}
