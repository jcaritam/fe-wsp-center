import { User } from "@nextui-org/react";
import { FC } from "react";
import { useAuthStore } from "../../features/auth/store";

export const Toolbar: FC = () => {
  const userAuth = useAuthStore(store => store.user);

  return (
    <div className="flex justify-between items-center bg-white shadow-md p-2">
      <div>
        {/* <h1 className="text-2xl font-bold">Whatsapp Center</h1> */}
      </div>
      <div>
        <User
          name={userAuth?.username}
          description={userAuth?.role}
        />
      </div>
    </div>
  )
}