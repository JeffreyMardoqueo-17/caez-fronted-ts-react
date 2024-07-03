export interface Alumno {
    Id: number;
    Nombre: string;
    Apellido: string;
    FechaNacimiento: Date;
    IdSexo: number;
    IdRole: number;
    IdEncargado: number;
    IdEnfermedad: number | null;
    IdTipoDocumento: number;
    NumDocumento: string;
    IdGrado: number;
    IdGrupo: number | null;
    IdTurno: number;
    IdAdministrador: number;
    IdPadrino: number | null;
    FechaRegistro: Date;
    EsBecado: boolean;
}
 // types.ts
export interface TipoDocumento {
  id: string;
  name: string;
}
