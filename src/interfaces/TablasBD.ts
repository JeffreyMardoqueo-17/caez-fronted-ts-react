export interface User {
  Id: string;
  Name: string;
  LastName: string;
  Login: string;
  Password: string;
  Status: string;
  RegistrationDate: string;
  IdRole: string;
}
export interface Encargado {
  Id: number;
  Nombre: string;
  Apellido: string;
  sexo: string;
  Role: string;
  Telefono: string;
  TelEmergencia: string;
  Correo: string;
  Direccion: string;
  TipoDocumento: string;
  NumDocumento: string;
  Administrador: boolean;
  FechaRegistro: string;
}

export interface Alumno {
  Id: string;
  Nombre: string;
  Apellido: string;
  FechaNacimiento: string;
  Sexo: string;
  Role: string;
  Encargado: string;
  Enfermedad: string | null;
  TipoDocumento: string;
  NumDocumento: string;
  Grado: string;
  Turno: string;
  Administrador: string;
  Padrino: string | null;
  FechaRegistro: string;
  EsBecado: boolean;
}
export interface Padrino {
  Id: string;
  Nombre: string;
  Apellido: string;
  IdSexo: string;
  IdRole: string;
  Telefono: string;
  Correo: string;
  IdDireccion: string;
  IdAdministrador: string;
  FechaRegistro: string;
}
export interface Grado {
  Id: string;
  Nombre: string;
}
export interface TipoDocumento {
  id: string;
  name: string;
}
export interface Enfermedad {
  Id: string;
  Nombre: string;
  Descripcion: string;
}
export interface Sexo {
  Id: string;
  Nombre: string;
}
export interface Direccion {
  Id: string;
  Nombre: string;
}

export interface Turno {
  Id: string;
  Nombre: string;
}
export interface Role {
  Id: string;
  Name: string;
}