import { ToastContainer } from 'react-toastify'

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
