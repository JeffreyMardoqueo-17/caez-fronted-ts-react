import React, { useState } from "react";
import { CustomInput } from '../Forms/CustomInput'
import { CustomTypography } from '../Forms/CustomTypography';
import { DatePicker } from '../Forms/DatePicker';
import { ComboBox } from "../Forms/ComboBox";

const Account1: React.FC = () => {
    const [date, setDate] = useState<Date | undefined>();
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    //para el com
    const [selectedOption, setSelectedOption] = useState<string>("");

    const options = [
        { value: 'Mujer', label: 'Mujer' },
        { value: 'Hombre', label: 'Hombre' },
    ];

    const handleSubmit = () => {
        const data = {
            firstName,
            lastName,
            dateOfBirth: date,
        };

        // Aquí puedes enviar los datos a tu API
        console.log(data);
    };
    return (
        <section className="px-8 py-20 dark:bg-darkTheme-formulario container mx-auto">
            <CustomTypography
                variant=""
                fontBold="font-bold"
                fontSize="text-3xl"
                className="text-darkTheme-background dark:text-lightTheme-background"
            >
                ALUMNO
            </CustomTypography>

            <CustomTypography
            variant=""
            fontBold="font-normal"
            fontSize=""
                className="text-lightTheme-gray dark:text-darkTheme-gray mt-1"
            >
                Ingrese la información del alumno
            </CustomTypography>

            <div className="flex flex-col mt-8">
                <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
                    <CustomInput
                        id="nombre"
                        initialValue=""
                        label="Nombre"
                        placeholder="Jeffrey Mardoqueo"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <CustomInput
                    id="apellido"
                        initialValue=""
                        label="Apellido"
                        placeholder="Jeffrey Mardoqueo"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className="mb-6 flex flex-col gap-4 md:flex-row">
                    <div className="w-full">
                        <CustomTypography
                            variant=""
                            fontBold="font-medium"
                            fontSize=""
                            className="mb-2  text-darkTheme-background dark:text-darkTheme-gray"
                        >
                            Fecha de Nacimiento
                        </CustomTypography>
                        <div className="flex flex-col md:flex-row gap-4">
                            <DatePicker date={date} setDate={setDate} />
                            <ComboBox
                                label="Seleccione una opción"
                                options={options}
                                selectedValue={selectedOption}
                                onChange={(value: React.SetStateAction<string>) => setSelectedOption(value)}
                            />
                            <ComboBox
                                label="Seleccione una opción"
                                options={options}
                                selectedValue={selectedOption}
                                onChange={(value: React.SetStateAction<string>) => setSelectedOption(value)}
                            />
                        </div>
                    </div>
                </div>
                <button onClick={handleSubmit} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                    Submit
                </button>
            </div>
        </section>
    );
};

export default Account1;
