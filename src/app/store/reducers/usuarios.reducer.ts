import { UsuarioState } from 'src/app/models/usuario.model';
import { usuarioActions } from '../actions/usuarios.actions';
import { Action } from '../../models/actions.model';

const usuariosState: UsuarioState = {
  users: [],
  loaded: false,
  loading: false,
  error: null
};

export function usersReducer(state = usuariosState, action: Action): UsuarioState {
  switch (action.type) {
    case usuarioActions.CARGAR:
      return {
        ...state,
        loading: true,
        error: null
      };
      case usuarioActions.CARGAR_SUCCESS:
        return {
          ...state,
          loading: false,
          loaded: true,
          users: [...action.payload]
        };
    case usuarioActions.CARGAR_FAIL:
      return {
        ...state,
        loaded: false,
        loading: false,
        error: {
          status: action.payload.status,
          message: action.payload.message,
          url: action.payload.url
        }
      };
    default:
      return state;
  }
}








