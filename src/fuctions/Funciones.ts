
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { SweetAlertIcon } from 'sweetalert2'

export const showAlert = (mensaje: string, icono: SweetAlertIcon | undefined, foco: string) => {
    onFocus(foco)
    const MySwal = withReactContent(Swal);
    MySwal.fire({
        title: mensaje,
        icon: icono
    });

}
const onFocus = (foco: string) => {
    if (foco !== null && foco !== '')
        document.getElementById(foco)?.focus();
}

// validateInput.ts, calida si ya tiene Datos y cambia el color del borde
export function validateInput(value: string): string {
    return value.trim() !== '' ? 'border-darkTheme-icono' : 'border-gray-300 dark:border-darkTheme-opacidad';
}
