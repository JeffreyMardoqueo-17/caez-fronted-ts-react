// interfaces/ComboBoxProps.ts
export interface ComboBoxProps {
    label: string;
    options: { value: string; label: string }[];
    selectedValue: string;
    onChange: (value: string) => void;
}
