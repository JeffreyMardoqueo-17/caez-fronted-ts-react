import React, { FC } from 'react';
import { Popover, PopoverHandler, PopoverContent } from '@material-tailwind/react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

interface DatePickerProps {
    date: Date | undefined;
    setDate: (date: Date | undefined) => void;
}

export const DatePicker: FC<DatePickerProps> = ({ date, setDate }) => {
    return (
        <Popover placement="bottom">
            <PopoverHandler>
                <div>
                    <input
                        readOnly
                        value={date ? format(date, "PPP") : ""}
                        placeholder="Seleccione la fecha de nacimiento"
                        className="w-full h-12 placeholder:opacity-100 focus:border-t-primary text-lightTheme-gray dark:text-darkTheme-gray border-t-blue-gray-200"
                    />
                </div>
            </PopoverHandler>
            <PopoverContent
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
            >
                <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    showOutsideDays
                    classNames={{
                        caption: "flex justify-center py-2 mb-4 relative items-center",
                        caption_label: "text-sm !font-medium text-gray-900",
                        nav: "flex items-center",
                        nav_button: "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                        nav_button_previous: "absolute left-1.5",
                        nav_button_next: "absolute right-1.5",
                        table: "w-full border-collapse",
                        head_row: "flex !font-medium text-gray-900",
                        head_cell: "m-0.5 w-9 !font-normal text-sm",
                        row: "flex w-full mt-2",
                        cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative",
                        day: "h-9 w-9 p-0 !font-normal",
                        day_range_end: "day-range-end",
                        day_selected: "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                        day_today: "rounded-md bg-gray-200 text-gray-900",
                        day_outside: "text-gray-500 opacity-50",
                        day_disabled: "text-gray-500 opacity-50",
                        day_hidden: "invisible",
                    }}
                    components={{
                        IconLeft: (props) => <ChevronLeftIcon {...props} className="h-4 w-4 stroke-2" />,
                        IconRight: (props) => <ChevronRightIcon {...props} className="h-4 w-4 stroke-2" />,
                    }}
                />
            </PopoverContent>
        </Popover>
    );
};