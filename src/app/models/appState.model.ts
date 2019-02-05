import { UsuarioState } from './usuario.model';
import { BuscarState } from './buscar.model';

export interface AppState {
  usuarios: UsuarioState;
  buscar: BuscarState;
}