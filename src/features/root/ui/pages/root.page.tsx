import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../../../auth/store';
import { ERole } from '../../../auth/interfaces';

export const RootPage = () => {

  const userAuth = useAuthStore(store => store.user);

  if (userAuth?.role !== ERole.ROOT) {
    return <Navigate to="/"/>
  }

  return (
    <Outlet/>
  )
}
