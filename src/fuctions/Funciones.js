
import Swal from 'sweetat2'
import withReactContent from 'sweetalert2-react-content'

export const showAlert = (mensaje, icono, foco) => {
    onFocus(foco)
    const MySwal = withReactContent(Swal);
    MySwal.fire({
        title: mensaje,
        icon: icono
    });

}

const onFocus = (foco) => {
    if (foco != '')
        document.getElementById(foco).focus();
}