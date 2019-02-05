import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../../models/appState.model';
import { usersReducer } from './usuarios.reducer';
import { buscarReducer } from './buscar.reducer';

export const appReducers: ActionReducerMap<AppState> = {
  usuarios: usersReducer,
  buscar: buscarReducer
};
