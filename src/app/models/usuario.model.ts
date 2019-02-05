
// export class Usuario {

//   constructor(
//     public id: number,
//     public nombre: string,
//     public apellido: string,
//     public avatar: string) { }

// }

export interface Usuario {
  id: number;
  firt_name: string;
  las_name: string;
  avatar: string;
}

export interface UsuarioState {
  users: Usuario[];
  loaded: boolean;
  loading: boolean;
  error: Error;
}

interface Error {
  status: number;
  message: string;
  url: string;
}

