import { FC } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useAuthStore } from "../features/auth/store";
import { EAuthStatus } from "../features/auth/interfaces";
import { Sidebar } from "../shared/components/sidebar";
import { SpinnerLoading } from "../shared/components/spinner";
import { Toolbar } from "../shared/components/toolbar";

export const AppLayout: FC = () => {
 const authStatus = useAuthStore(store => store.status);
 const checkAuthStatus = useAuthStore(store => store.checkAuthStatus);

 if (authStatus === EAuthStatus.PENDING) {
  checkAuthStatus()
  return <SpinnerLoading/>
 }

 if (authStatus === EAuthStatus.NOT_AUTHENTICATED) {
  return <Navigate to="/auth/login" />
 }

 return (
  <div className="h-screen w-screen flex">
     <Sidebar/>
     <div className="w-[82vw]">
      <Toolbar/>
      <main className="px-3 py-3">
       <Outlet/>
      </main>
     </div>
  </div>
 )
}