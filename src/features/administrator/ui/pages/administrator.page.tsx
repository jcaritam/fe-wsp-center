import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../../../auth/store';
import { ERole } from '../../../auth/interfaces';

export const AdministratorPage = () => {
  const userAuth = useAuthStore(store => store.user);

  if (userAuth?.role !== ERole.ADMIN) return <Navigate to="/"/>

  return (
    <Outlet/>
  )
}
