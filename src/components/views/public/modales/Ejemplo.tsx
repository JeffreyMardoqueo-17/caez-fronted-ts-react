import React, { useState } from 'react';
import { Modal } from '../../../models/Modal';

export const Ejemplo = () => {
    const [showModal, setShowModal] = useState(false);

    const handleDelete = () => {
        console.log('Item deleted');
    };

    return (
        <div>
            <button
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Abrir el modal
            </button>
            <Modal
                showModal={showModal}
                setShowModal={setShowModal}
                title="Eliminar Alumno"
                content="¿Estás seguro de que deseas eliminar este elemento?"
                confirmText="Eliminar"
                cancelText="Cancelar"
                onConfirm={handleDelete}
            />
        </div>
    );
};
