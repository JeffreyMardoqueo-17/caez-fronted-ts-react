export type FormProps = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    children: React.ReactNode;
}

export type InputProps = {
    id: string;
    name?: string;
    type: string;
    label: string;
    placeholder?: string;
    required?: boolean;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}