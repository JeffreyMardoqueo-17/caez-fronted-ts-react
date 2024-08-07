import { useState } from 'react';

/**
 * Hook personalizado para manejar la paginación.
 *
 * @param {Array} tableRows - Las filas de la tabla.
 * @returns {Object} - Un objeto que contiene el estado y las funciones para manejar la paginación.
 */
export function usePagination(tableRows: Array<{ [key: string]: string | React.ReactNode[] }>) {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const totalPages = Math.ceil(tableRows.length / itemsPerPage);

    /**
     * Cambia la página actual.
     * @param {number} newPage - La nueva página a la que se quiere cambiar.
     */

    const handleChangePage = (newPage: number) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    /**
     * Cambia la cantidad de elementos por página.
     *
     * @param {React.ChangeEvent<HTMLSelectElement>} event - El evento de cambio del select.
     */
    const handleChangeItemsPerPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setItemsPerPage(Number(event.target.value));
        setCurrentPage(1);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentRows = tableRows.slice(startIndex, startIndex + itemsPerPage);

    return {
        currentPage,
        itemsPerPage,
        totalPages,
        currentRows,
        handleChangePage,
        handleChangeItemsPerPage,
    };
}
