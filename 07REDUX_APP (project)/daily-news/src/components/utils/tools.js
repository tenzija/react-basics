import {toast} from 'react-toastify'

export const showToast = (type, msg) => {
    switch(type){
        case 'SUCCESS':
            toast.success(msg,{
                position: toast.POSITION.TOP_CENTER
            })
        break
        case 'ERROR':
            toast.error(msg,{
                position: toast.POSITION.TOP_CENTER
            })
        break
        default:
            return false;
    }
}