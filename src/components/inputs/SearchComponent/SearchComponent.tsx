import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { validateInput } from '../../../fuctions/Funciones';

interface SearchComponentProps<T> {
    route: string;
    renderResult: (result: T) => JSX.Element;
    onSelect: (result: T) => void;
    getResultText: (result: T) => string; 
}

const SearchComponent = <T,>({ route, renderResult, onSelect, getResultText }: SearchComponentProps<T>): JSX.Element => {
    const [searchText, setSearchText] = useState('');
    const [results, setResults] = useState<T[]>([]);
    const [loading, setLoading] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchResults = async () => {
            setLoading(true);
            try {
                const response = await axios.post(route, { textoBusqueda: searchText });
                setResults(response.data);
            } catch (error) {
                console.error('Error fetching search results:', error);
                setResults([]);
            }
            setLoading(false);
        };

        if (searchText) {
            fetchResults();
            setShowResults(true);
        } else {
            setResults([]);
            setShowResults(false);
        }
    }, [searchText, route]);

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'ArrowDown') {
            event.preventDefault(); // Evita el scroll por defecto del navegador
            setHighlightedIndex((prevIndex) => Math.min(prevIndex + 1, results.length - 1));
        } else if (event.key === 'ArrowUp') {
            event.preventDefault(); // Evita el scroll por defecto del navegador
            setHighlightedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        } else if (event.key === 'Enter' && highlightedIndex >= 0) {
            event.preventDefault(); // Evita enviar el formulario por defecto en un formulario HTML
            const selectedResult = results[highlightedIndex];
            setSearchText(getResultText(selectedResult));
            onSelect(selectedResult);
            setShowResults(false); // Oculta la lista de resultados
        }
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
            setShowResults(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const inputBorderColor = validateInput(searchText); // Obtén la clase para el borde del input

    return (
        <div className="relative" ref={containerRef}>
            <label htmlFor="search" className="mb-1 block text-base font-medium text-gray-700 dark:text-gray-400">Nombre</label>
            <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={handleKeyDown}
                className={`block w-full rounded-md shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 dark:bg-darkTheme-input dark:text-darkTheme-gray focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 ${inputBorderColor}`}
                placeholder="Nombre"
            />
            {loading && <p className="absolute left-0 right-0 mt-2 dark:bg-darkTheme-background p-2 border dark:border-darkTheme-background rounded shadow">Cargando...</p>}
            {showResults && (
                <ul className="absolute left-0 right-0 mt-2 dark:bg-darkTheme-formulario dark:text-darkTheme-gray border rounded dark:border-darkTheme-background shadow max-h-60 overflow-y-auto z-10">
                    {results.map((result, index) => (
                        <li
                            key={index}
                            className={`p-2 cursor-pointer ${highlightedIndex === index ? 'dark:bg-darkTheme-background' : ''}`}
                            onMouseEnter={() => setHighlightedIndex(index)}
                            onClick={() => {
                                setSearchText(getResultText(result)); // Actualiza el input con el texto seleccionado
                                onSelect(result);
                                setShowResults(false);
                            }}
                        >
                            {renderResult(result)}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchComponent;
