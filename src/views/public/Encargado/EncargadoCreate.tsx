import React, { useState } from 'react';
import axios from 'axios';
import { Encargado } from '../../../interfaces/TablasBD';

/**
 * Formulario para crear un nuevo encargado
 */
export default function EncargadoCreate() {
    // Estados para cada campo del formulario
    const [Nombre, setNombre] = useState<string>('');
    const [Apellido, setApellido] = useState<string>('');
    const [IdSexo, setIdSexo] = useState<number | string>(''); // ID como número
    const [IdRole, setIdRole] = useState<number | string>(''); // ID como número
    const [Telefono, setTelefono] = useState<string>('');
    const [TelEmergencia, setTelEmergencia] = useState<string>('');
    const [Correo, setCorreo] = useState<string>('');
    const [IdDireccion, setIdDireccion] = useState<number | string>(''); // ID como número
    const [IdTipoDocumento, setIdTipoDocumento] = useState<number | string>(''); // ID como número
    const [NumDocumento, setNumDocumento] = useState<string>('');
    const [IdAdministrador, setIdAdministrador] = useState<number | string>(''); // ID como número

    // Ejemplos de listas de opciones (reemplaza estos con tus datos reales)
    const sexos = [
        { id: 1, nombre: 'Masculino' },
        { id: 2, nombre: 'Femenino' },
        // Agrega más opciones según sea necesario
    ];

    const roles = [
        { id: 1, nombre: 'Admin' },
        { id: 2, nombre: 'User' },
        // Agrega más opciones según sea necesario
    ];

    const direcciones = [
        { id: 1, direccion: 'Calle 123' },
        { id: 2, direccion: 'Avenida 456' },
        // Agrega más opciones según sea necesario
    ];

    const tiposDocumento = [
        { id: 1, tipo: 'DNI' },
        { id: 2, tipo: 'Pasaporte' },
        // Agrega más opciones según sea necesario
    ];

    const administradores = [
        { id: 1, nombre: 'Admin 1' },
        { id: 2, nombre: 'Admin 2' },
        // Agrega más opciones según sea necesario
    ];

    // Maneja el envío del formulario
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const encargado: Encargado = {
            Id: 0, // Aquí podrías gestionar la lógica para el ID si es necesario
            Nombre,
            Apellido,
            sexo: IdSexo.toString(),
            Role: IdRole.toString(),
            Telefono,
            TelEmergencia,
            Correo,
            Direccion: IdDireccion.toString(),
            TipoDocumento: IdTipoDocumento.toString(),
            NumDocumento,
            Administrador: Boolean(IdAdministrador),
            FechaRegistro: new Date().toISOString()
        };

        // Convertir los valores de ID a números
        const dataToSend = {
            ...encargado,
            IdSexo: parseInt(IdSexo.toString(), 10),
            IdRole: parseInt(IdRole.toString(), 10),
            IdDireccion: parseInt(IdDireccion.toString(), 10),
            IdTipoDocumento: parseInt(IdTipoDocumento.toString(), 10),
            IdAdministrador: parseInt(IdAdministrador.toString(), 10)
        };

        try {
            await axios.post('/Encargados', dataToSend);
            alert('Encargado creado exitosamente');
            // Limpiar formulario
            setNombre('');
            setApellido('');
            setIdSexo('');
            setIdRole('');
            setTelefono('');
            setTelEmergencia('');
            setCorreo('');
            setIdDireccion('');
            setIdTipoDocumento('');
            setNumDocumento('');
            setIdAdministrador('');
        } catch (error) {
            console.error('Error al crear el encargado:', error);
            alert('Error al crear el encargado');
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-2xl font-bold mb-4">Crear Encargado</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nombre</label>
                        <input
                            type="text"
                            value={Nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Apellido</label>
                        <input
                            type="text"
                            value={Apellido}
                            onChange={(e) => setApellido(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Sexo</label>
                        <select
                            value={IdSexo}
                            onChange={(e) => setIdSexo(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                            required
                        >
                            <option value="">Selecciona un sexo</option>
                            {sexos.map((sexo) => (
                                <option key={sexo.id} value={sexo.id}>
                                    {sexo.nombre}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Rol</label>
                        <select
                            value={IdRole}
                            onChange={(e) => setIdRole(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                            required
                        >
                            <option value="">Selecciona un rol</option>
                            {roles.map((role) => (
                                <option key={role.id} value={role.id}>
                                    {role.nombre}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Dirección</label>
                        <select
                            value={IdDireccion}
                            onChange={(e) => setIdDireccion(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                            required
                        >
                            <option value="">Selecciona una dirección</option>
                            {direcciones.map((direccion) => (
                                <option key={direccion.id} value={direccion.id}>
                                    {direccion.direccion}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Tipo de Documento</label>
                        <select
                            value={IdTipoDocumento}
                            onChange={(e) => setIdTipoDocumento(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                        >
                            <option value="">Selecciona un tipo de documento</option>
                            {tiposDocumento.map((tipo) => (
                                <option key={tipo.id} value={tipo.id}>
                                    {tipo.tipo}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Administrador</label>
                        <select
                            value={IdAdministrador}
                            onChange={(e) => setIdAdministrador(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                            required
                        >
                            <option value="">Selecciona un administrador</option>
                            {administradores.map((admin) => (
                                <option key={admin.id} value={admin.id}>
                                    {admin.nombre}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <button
                    type="submit"
                    className="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
                >
                    Crear Encargado
                </button>
            </form>
        </div>
    );
}
