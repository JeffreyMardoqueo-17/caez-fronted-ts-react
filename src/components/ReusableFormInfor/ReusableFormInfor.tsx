import React from 'react';

interface FieldConfig {
    label: string;
    value: string | number;
    type?: string;
}

interface FormProps {
    fields: FieldConfig[];
}

const ReusableFormInfor: React.FC<FormProps> = ({ fields }) => {
    return (
        <div className="bg-lightTheme-primary dark:bg-darkTheme-background p-4 rounded-lg">
            {fields.map((field, index) => (
                <div className="mb-4" key={index}>
                    <label className="block text-sm font-bold mb-2">{field.label}</label>
                    <input
                        type={field.type || 'text'}
                        value={field.value}
                        readOnly
                        className="w-full p-2 border rounded-md bg-gray-100 dark:bg-gray-800"
                    />
                </div>
            ))}
        </div>
    );
};

export default ReusableFormInfor;
