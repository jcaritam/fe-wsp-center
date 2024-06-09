import { Navigate, Outlet } from "react-router-dom"
import { EAuthStatus } from "../features/auth/interfaces";
import { useAuthStore } from "../features/auth/store";
import { SpinnerLoading } from "../shared/components/spinner";

export const AuthLayout = () => {

  const authStatus = useAuthStore(store => store.status);
  const checkAuthStatus = useAuthStore(store => store.checkAuthStatus);

  if(authStatus === EAuthStatus.PENDING) {
    checkAuthStatus();
    return <SpinnerLoading/>
  }

  if (authStatus === EAuthStatus.AUTHENTICATED) {
    return <Navigate to="/" />
  }

  return (
    <div>
     <Outlet/>
    </div>
  )
}
