import React from 'react';

interface FieldConfig {
    label: string;
    value: string | number | null;
    type?: string;
}

interface FormProps {
    fields: FieldConfig[];
}

/**
 * Componente reutilizable de formulario de información.
 * @param {FieldConfig[]} fields - Campos del formulario que serian label y los valores.
 * @component
 * @param {FormProps} props - Propiedades del formulario.
 * @param {Array<Field>} props.fields - Campos del formulario.
 * @returns {JSX.Element} Elemento JSX que representa el formulario de información reutilizable.
 */
const ReusableFormInfor: React.FC<FormProps> = ({ fields }) => {
    return (
        <div className="bg-lightTheme-primary dark:bg-darkTheme-formulario p-4 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {fields.map((field, index) => (
                    <div className="mb-4" key={index}>
                        <label className="block text-sm font-bold mb-2 dark:text-darkTheme-gray">{field.label}</label>
                        <input
                            type={field.type || 'text'}
                            value={field.value !== null ? field.value : ''}
                            readOnly
                            className="w-full p-2 border rounded-md bg-gray-100 dark:bg-darkTheme-background dark:text-darkTheme-text"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReusableFormInfor;
