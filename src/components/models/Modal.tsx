import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { CustomTypography } from "../Forms/CustomTypography";
import { ModalProps } from '../../interfaces/ModalProps';

/**
 * Modal component that displays a modal dialog box.
 *
 * Componente Modal que muestra un cuadro de diálogo modal.
 *
 * @param showModal - Boolean value indicating whether the modal should be shown or hidden.
 * @param setShowModal - Function to toggle the visibility of the modal.
 * @param title - The title of the modal.
 * @param content - The content of the modal.
 * @param confirmText - The text to display on the confirm button.
 * @param cancelText - The text to display on the cancel button.
 * @param onConfirm - Optional callback function to be called when the confirm button is clicked.
 *
 * @returns The Modal component.
 */
export const Modal: React.FC<ModalProps> = ({ showModal, setShowModal, title, content, confirmText, cancelText, onConfirm }) => {
    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showModal]);

    const handleClose = () => {
        setShowModal(false);
    };

    const handleOutsideClick = (e) => {
        if (e.target.id === 'modal-overlay') {
            handleClose();
        }
    };

    return (
        <>
            {showModal ? (
                <>
                    <div
                        id="modal-overlay"
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-500 bg-opacity-75 backdrop-blur-sm dark:bg-gray-800 dark:bg-opacity-75"
                        onClick={handleOutsideClick}
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-lightTheme-background dark:bg-darkTheme-formulario outline-none focus:outline-none border-2 border-lightTheme-text">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 dark:border-darkTheme-background rounded-t">
                                    <CustomTypography
                                        variant=""
                                        fontBold="font-bold"
                                        fontSize="text-3xl"
                                        className="text-darkTheme-background dark:text-lightTheme-background"
                                    >
                                        {title}
                                    </CustomTypography>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={handleClose}
                                    >
                                        <span className="bg-transparent text-black dark:text-darkTheme-primary h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-blueGray-500 dark:text-darkTheme-gray text-lg leading-relaxed">
                                        {content}
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 dark:border-darkTheme-background rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={handleClose}
                                    >
                                        {cancelText}
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => {
                                            onConfirm?.();
                                            handleClose();
                                        }}
                                    >
                                        {confirmText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
};

Modal.propTypes = {
    showModal: PropTypes.bool.isRequired,
    setShowModal: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    confirmText: PropTypes.string,
    cancelText: PropTypes.string,
    onConfirm: PropTypes.func
};

Modal.defaultProps = {
    confirmText: 'Confirm',
    cancelText: 'Cancel',
    onConfirm: () => {}
};
