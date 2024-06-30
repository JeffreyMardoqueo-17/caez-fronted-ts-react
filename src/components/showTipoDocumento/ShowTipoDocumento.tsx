import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal } from '../modales/Modal';
import { CustomTypography } from '../Forms/CustomTypography'; // Ajusta la ruta según corresponda

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

  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>('');
  const [modalBody, setModalBody] = useState<React.ReactNode>(null);
  const [confirmText, setConfirmText] = useState<string>('Confirmar');
  const [cancelText, setCancelText] = useState<string>('Cancelar');
  const [onConfirmAction, setOnConfirmAction] = useState<(() => void) | undefined>(undefined);

  useEffect(() => {
    getTiposDocumentos();
  }, []);

  const getTiposDocumentos = async () => {
    try {
      const respuesta = await axios.get(url);
      setTiposDocumento(respuesta.data);
      console.log('Datos recibidos:', respuesta.data);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  const abrirModal = (modo: 'agregar' | 'editar' | 'eliminar', tipoDocumento?: TipoDocumento) => {
    if (modo === 'agregar') {
      setModoEdicion(false);
      setModalTitle('Agregar Tipo de Documento');
      setModalBody(
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            className="form-control"
            placeholder="Nombre"
            value={nombreNuevoTipoDocumento}
            onChange={(e) => setNombreNuevoTipoDocumento(e.target.value)}
          />
        </div>
      );
      setOnConfirmAction(agregarTipoDocumento);
      setConfirmText('Agregar');
    } else if (modo === 'editar' && tipoDocumento) {
      setModoEdicion(true);
      setTipoDocumentoEditando(tipoDocumento);
      setNombreNuevoTipoDocumento(tipoDocumento.Nombre);
      setModalTitle('Editar Tipo de Documento');
      setModalBody(
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            className="form-control"
            placeholder="Nombre"
            value={nombreNuevoTipoDocumento} // Mostrar el nombre actual del tipo de documento
            onChange={(e) => setNombreNuevoTipoDocumento(e.target.value)}
          />
        </div>
      );
      setOnConfirmAction(editarTipoDocumento);
      setConfirmText('Guardar Cambios');
    } else if (modo === 'eliminar' && tipoDocumento) {
      setModalTitle('Confirmar Eliminación');
      setModalBody(
        <div>
          <p>¿Estás seguro que deseas eliminar el tipo de documento con ID: {tipoDocumento.Id}?</p>
        </div>
      );
      setOnConfirmAction(() => eliminarTipoDocumento(tipoDocumento.Id));
      setConfirmText('Eliminar');
    }
    setShowModal(true);
  };

  const eliminarTipoDocumento = async (tipoDocumentoId: number) => {
    try {
      await axios.delete(`${url}/${tipoDocumentoId}`);
      await getTiposDocumentos();
      closeModal();
    } catch (error) {
      console.error('Error al eliminar tipo de documento:', error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setModoEdicion(false);
    setTipoDocumentoEditando(null);
    setNombreNuevoTipoDocumento('');
    setModalTitle('');
    setModalBody(null);
    setConfirmText('Confirmar');
    setCancelText('Cancelar');
    setOnConfirmAction(undefined);
  };

  const agregarTipoDocumento = async () => {
    try {
      await axios.post(url, { Nombre: nombreNuevoTipoDocumento });
      await getTiposDocumentos();
      closeModal();
    } catch (error) {
      console.error('Error al crear nuevo tipo de documento:', error);
    }
  };

  const editarTipoDocumento = async () => {
    if (modoEdicion && tipoDocumentoEditando) {
      try {
        await axios.put(`${url}/${tipoDocumentoEditando.Id}`, { Nombre: nombreNuevoTipoDocumento });
        await getTiposDocumentos();
        closeModal();
      } catch (error) {
        console.error('Error al actualizar tipo de documento:', error);
      }
    }
  };

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center w-full h-full bg-gray-100">
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
            onClick={() => abrirModal('agregar')}
          >
            Agregar
          </button>
        </div>

        {/* Tabla */}
        <div className="w-full">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">ID</th>
                <th className="py-2">Nombre</th>
                <th className="py-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {tiposDocumento.map((tipoDocumento) => (
                <tr key={tipoDocumento.Id}>
                  <td className="border px-4 py-2">{tipoDocumento.Id}</td>
                  <td className="border px-4 py-2">{tipoDocumento.Nombre}</td>
                  <td className="border px-4 py-2">
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
                      onClick={() =>
                        abrirModal('eliminar', tipoDocumento)
                      }
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
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          title={modalTitle}
          body={modalBody}
          confirmText={confirmText}
          cancelText={cancelText}
          onConfirm={onConfirmAction}
        />
      </div>
    </div>
  );
};

export default ShowTipoDocumento;
