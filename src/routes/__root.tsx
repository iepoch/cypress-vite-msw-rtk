
import "react-toastify/dist/ReactToastify.css"
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import ResponsiveAppBar from '../components/Appbar/Appbar'
import { ToastContainer } from 'react-toastify';
export const Route = createRootRoute({
  
  component: () =>(
      <>
      <ToastContainer />
       <ResponsiveAppBar />

        <Outlet />
        <TanStackRouterDevtools />
      </>
    )
})

