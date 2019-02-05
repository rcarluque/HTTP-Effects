import { Usuario } from './usuario.model';

export interface BuscarState {
  user: Usuario;
  loaded: boolean;
  loading: boolean;
  error: any;
}
