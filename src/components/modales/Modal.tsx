import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { CustomTypography } from "../Forms/CustomTypography";
import { ModalProps } from '../../interfaces/ModalProps';

/**
 * Modal component that displays a modal dialog box.
 *
 * @param {ModalProps} props - The props for the modal component.
 * @returns {JSX.Element} The Modal component.
 */
export const Modal: React.FC<ModalProps> = ({ showModal, setShowModal, title, body, confirmText, cancelText, onConfirm }) => {
    useEffect(() => {
        showModal ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showModal]);

    const handleClose = () => {
        setShowModal(false);
    };

    const handleOutsideClick = (e: React.MouseEvent<EventTarget>) => {
        const target = e.target as HTMLDivElement;
        if (target.id === 'modal-overlay') {
            handleClose();
        }
    };

    return (
        <div>
            {showModal ? (
                <>
                    <div
                        id="modal-overlay"
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-500 bg-opacity-75 backdrop-blur-sm dark:bg-gray-800 dark:bg-opacity-75"
                        onClick={handleOutsideClick}
                    >
                        <div className="relative w-auto my-6 mx-auto">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-lightTheme-primary dark:bg-darkTheme-formulario outline-none focus:outline-none border-2 border-darkTheme-icono">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 dark:border-darkTheme-background rounded-t">
                                    <CustomTypography
                                        color=''
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
                                    {body}
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
        </div>
    );
};

Modal.propTypes = {
    showModal: PropTypes.bool.isRequired,
    setShowModal: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.node.isRequired,
    confirmText: PropTypes.string,
    cancelText: PropTypes.string,
    onConfirm: PropTypes.func
};

Modal.defaultProps = {
    confirmText: 'Confirm',
    cancelText: 'Cancel',
    onConfirm: () => { }
};
