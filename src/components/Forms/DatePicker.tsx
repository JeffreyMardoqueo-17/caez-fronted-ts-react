import React, { FC, useState } from 'react';
import { Popover, PopoverHandler, PopoverContent } from '@material-tailwind/react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

interface DatePickerProps {
    date: Date | undefined;
    setDate: (date: Date | undefined) => void;
}

export const DatePicker: FC<DatePickerProps> = ({ date, setDate }) => {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(date);

    const handleSelectDate = (date: Date | undefined) => {
        setSelectedDate(date);
        setDate(date);
    };

    const handleSelectNow = () => {
        const now = new Date();
        setSelectedDate(now);
        setDate(now);
    };

    const dateValue = selectedDate ? format(selectedDate, "PPP") : "";
    const timeValue = selectedDate ? format(selectedDate, "p") : "";

    return (
        <Popover placement="bottom">
            <PopoverHandler>
                <div className="relative">
                    <input
                        readOnly
                        value={dateValue ? `${dateValue}, ${timeValue}` : ""}
                        placeholder="Seleccione la fecha y hora"
                        className={`w-auto h-12 placeholder:opacity-100 focus:border-t-primary text-lightTheme-gray dark:text-bg-darkTheme-gray pl-4 pr-10 py-2 rounded-md shadow-sm cursor-pointer bg-lightTheme-background dark:bg-darkTheme-background ${dateValue ? 'border-blue-600' : 'border-lightTheme-gray'}`}
                    />
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400 dark:text-darkTheme-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 9.707a1 1 0 011.414 0L10 13.586l3.293-3.879a1 1 0 011.414 0l.793.793a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l.793-.793z" clipRule="evenodd" />
                        </svg>
                    </span>
                </div>
            </PopoverHandler>
            <PopoverContent
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                className="p-2 bg-lightTheme-background dark:bg-darkTheme-background border border-gray-300 dark:border-darkTheme-gray rounded-md shadow-lg"
            >
                <DayPicker
                    mode="single"
                    selected={selectedDate}
                    onSelect={handleSelectDate}
                    showOutsideDays
                    classNames={{
                        caption: "flex justify-center py-2 mb-4 relative items-center",
                        caption_label: "text-sm font-medium text-gray-900 dark:text-darkTheme-gray",
                        nav: "flex items-center",
                        nav_button: "h-6 w-6 bg-transparent hover:bg-blue-gray-50 dark:text-darkTheme-gray dark:hover:bg-darkTheme-background p-1 rounded-md transition-colors duration-300",
                        nav_button_previous: "absolute left-1.5",
                        nav_button_next: "absolute right-1.5",
                        table: "w-full border-collapse",
                        head_row: "flex font-medium text-gray-900 dark:text-darkTheme-gray",
                        head_cell: "m-0.5 w-9 font-normal text-sm",
                        row: "flex w-full mt-2",
                        cell: "text-gray-600 dark:text-darkTheme-gray rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative",
                        day: "h-9 w-9 p-0 font-normal",
                        day_range_end: "day-range-end",
                        day_selected: "rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:bg-blue-700",
                        day_today: "rounded-md bg-gray-200 dark:bg-darkTheme-background text-gray-900 dark:text-darkTheme-gray",
                        day_outside: "text-gray-500 dark:text-gray-600 opacity-50",
                        day_disabled: "text-gray-500 dark:text-gray-600 opacity-50",
                        day_hidden: "invisible",
                    }}
                    components={{
                        IconLeft: (props) => <ChevronLeftIcon {...props} className="h-4 w-4 stroke-2" />,
                        IconRight: (props) => <ChevronRightIcon {...props} className="h-4 w-4 stroke-2" />,
                    }}
                />
                <button
                    onClick={handleSelectNow}
                    className="mt-2 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                >
                    Seleccionar Fecha y Hora Actual
                </button>
            </PopoverContent>
        </Popover>
    );
};
