export interface CustomInputProps {
    id:string;
    label: string;
    placeholder: string;
    value: string;
    initialValue: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}