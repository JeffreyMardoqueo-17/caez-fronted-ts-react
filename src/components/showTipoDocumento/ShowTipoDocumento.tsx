import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface TipoDocumento {
  Id: number;
  Nombre: string;
}

const ShowTipoDocumento: React.FC = () => {
  const url = 'http://localhost:3000/TiposDocumento';
  const [tiposDocumento, setTiposDocumento] = useState<TipoDocumento[]>([]);
  const [titulo, setTitulo] = useState<string>('Tipos de Documento');
  const [modoEdicion, setModoEdicion] = useState<boolean>(false);
  const [tipoDocumentoEditando, setTipoDocumentoEditando] = useState<TipoDocumento | null>(null);
  const [nombreNuevoTipoDocumento, setNombreNuevoTipoDocumento] = useState<string>('');

  useEffect(() => {
    getTiposDocumentos();
  }, []);

  const getTiposDocumentos = async () => {
    try {
      const respuesta = await axios.get(url);
      setTiposDocumento(respuesta.data);
      console.log("Datos recibidos:", respuesta.data);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  const abrirModal = (modo: 'agregar' | 'editar', tipoDocumento?: TipoDocumento) => {
    if (modo === 'agregar') {
      setModoEdicion(false);
      setNombreNuevoTipoDocumento('');
    } else if (modo === 'editar' && tipoDocumento) {
      setModoEdicion(true);
      setTipoDocumentoEditando(tipoDocumento);
      setNombreNuevoTipoDocumento(tipoDocumento.Nombre);
    }
    const modal = new bootstrap.Modal(document.getElementById('modalTiposDocumentos'));
    modal.show();
  };

  const guardarTipoDocumento = async () => {
    if (modoEdicion && tipoDocumentoEditando) {
      // Modo Edición: Actualizar tipo de documento existente
      try {
        await axios.put(`${url}/${tipoDocumentoEditando.Id}`, { Nombre: nombreNuevoTipoDocumento });
        await getTiposDocumentos();
        closeModal();
      } catch (error) {
        console.error("Error al actualizar tipo de documento:", error);
      }
    } else {
      // Modo Agregar: Crear nuevo tipo de documento
      try {
        await axios.post(url, { Nombre: nombreNuevoTipoDocumento });
        await getTiposDocumentos();
        closeModal();
      } catch (error) {
        console.error("Error al crear nuevo tipo de documento:", error);
      }
    }
  };

  const closeModal = () => {
    const modal = bootstrap.Modal.getInstance(document.getElementById('modalTiposDocumentos'));
    if (modal) {
      modal.hide();
      setTipoDocumentoEditando(null);
      setNombreNuevoTipoDocumento('');
    }
  };

  return (
    <div className=''>
      <div className='flex flex-col items-center justify-center w-full h-full bg-gray-100'>
        <div>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4'
            onClick={() => abrirModal('agregar')}
          >
            Agregar
          </button>
        </div>

        {/* Tabla */}
        <div className='w-full'>
          <table className='min-w-full bg-white'>
            <thead>
              <tr>
                <th className='py-2'>ID</th>
                <th className='py-2'>Nombre</th>
                <th className='py-2'>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {tiposDocumento.map((tipoDocumento) => (
                <tr key={tipoDocumento.Id}>
                  <td className='border px-4 py-2'>{tipoDocumento.Id}</td>
                  <td className='border px-4 py-2'>{tipoDocumento.Nombre}</td>
                  <td className='border px-4 py-2'>
                    <button
                      type="button"
                      className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                      onClick={() => abrirModal('editar', tipoDocumento)}
                    >
                      Editar
                    </button>
                    &nbsp;
                    <button
                      type="button"
                      className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        <div className='modal fade' id='modalTiposDocumentos' tabIndex={-1} aria-labelledby='modalTiposDocumentosLabel' aria-hidden='true'>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='modalTiposDocumentosLabel'>{modoEdicion ? 'Editar Tipo de Documento' : 'Agregar Tipo de Documento'}</h5>
                <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' onClick={closeModal}></button>
              </div>
              <div className='modal-body'>
                <div>
                  <label htmlFor="nombre">Nombre</label>
                  <input
                    type="text"
                    id="nombre"
                    className="form-control"
                    placeholder="Nombre"
                    value={nombreNuevoTipoDocumento}
                    onChange={(e) => setNombreNuevoTipoDocumento(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className='modal-footer'>
                <button type='button' className='btn btn-secondary' data-bs-dismiss='modal' onClick={closeModal}>Cerrar</button>
                <button type='button' className='btn btn-primary' onClick={guardarTipoDocumento}>
                  {modoEdicion ? 'Guardar Cambios' : 'Agregar'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowTipoDocumento;
