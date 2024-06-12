export interface CustomInputProps {
    label: string;
    placeholder: string;
    value: string;
    initialValue: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}