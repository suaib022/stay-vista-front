
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './Provider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

    <AuthProvider>
      <Toaster />
      <RouterProvider router={router} />
    </AuthProvider>

)
