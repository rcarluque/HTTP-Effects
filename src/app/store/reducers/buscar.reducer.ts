import { Action } from '../../models/actions.model';
import { BuscarState } from 'src/app/models/buscar.model';
import { buscarActionsTypes } from '../actions/buscar.actions';

const buscarState: BuscarState = {
  user: null,
  loaded: false,
  loading: false,
  error: null
};

export function buscarReducer(state = buscarState, action: Action): BuscarState {
  switch (action.type) {
    case buscarActionsTypes.BUSCAR:
      return {
        ...state,
        loading: true,
        error: null
      };
      case buscarActionsTypes.BUSCAR_SUCCESS:
        return {
          ...state,
          loading: false,
          loaded: true,
          user: action.payload // {...action.payload}
        };
    case buscarActionsTypes.BUSCAR_FAIL:
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








