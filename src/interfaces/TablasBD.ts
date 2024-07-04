export interface Encargado {
    Id: number;
    Nombre: string;
    Apellido: string;
    Role: string;
    Telefono: string;
    TelEmergencia: string;
    Correo: string;
    TipoDocumento: string;
    NumDocumento: string;
    Administrador: boolean;
    FechaRegistro: string;
}

export interface Alumno {
    Id: number;
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
    Grupo: string | null;
    Turno: string;
    Administrador: string;
    Padrino: string | null;
    FechaRegistro: string;
    EsBecado: boolean;
}

 // types.ts
export interface TipoDocumento {
  id: string;
  name: string;
}
