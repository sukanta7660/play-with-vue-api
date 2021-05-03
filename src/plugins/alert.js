import vue from 'vue'
import Swal from 'sweetalert2'


const alert = ({type = 'success', messages})=>{
    
    Swal.fire({
        position: 'top-end',
        icon: type,
        title: messages,
        showConfirmButton: false,
        timer: 1500
     })
}

vue.prototype.$alert = alert;