export class Alumno {
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

    constructor(
        Id?: number,
        Nombre?: string,
        Apellido?: string,
        FechaNacimiento?: Date,
        IdSexo?: number,
        IdRole?: number,
        IdEncargado?: number,
        IdEnfermedad?: number | null,
        IdTipoDocumento?: number,
        NumDocumento?: string,
        IdGrado?: number,
        IdGrupo?: number | null,
        IdTurno?: number,
        IdAdministrador?: number,
        IdPadrino?: number | null,
        FechaRegistro?: Date,
        EsBecado?: boolean
    ) {
        this.Id = Id || 0;
        this.Nombre = Nombre || '';
        this.Apellido = Apellido || '';
        this.FechaNacimiento = FechaNacimiento || new Date();
        this.IdSexo = IdSexo || 0;
        this.IdRole = IdRole || 0;
        this.IdEncargado = IdEncargado || 0;
        this.IdEnfermedad = IdEnfermedad || null;
        this.IdTipoDocumento = IdTipoDocumento || 0;
        this.NumDocumento = NumDocumento || '';
        this.IdGrado = IdGrado || 0;
        this.IdGrupo = IdGrupo || null;
        this.IdTurno = IdTurno || 0;
        this.IdAdministrador = IdAdministrador || 0;
        this.IdPadrino = IdPadrino || null;
        this.FechaRegistro = FechaRegistro || new Date();
        this.EsBecado = EsBecado || false;
    }
}