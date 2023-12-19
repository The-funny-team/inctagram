import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

export const Toast = () => {
  return (
    <ToastContainer
      autoClose={3000}
      closeOnClick
      draggable={false}
      hideProgressBar
      limit={3}
      newestOnTop
      pauseOnFocusLoss={false}
      pauseOnHover={false}
      position={'top-center'}
      rtl={false}
      theme={'colored'}
    />
  )
}
