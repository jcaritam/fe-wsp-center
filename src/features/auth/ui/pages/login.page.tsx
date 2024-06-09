import { useState } from "react";
import { Button, Input } from "@nextui-org/react"
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import toast from "react-hot-toast";

import type { ILoginCredentials } from "../../interfaces"
import { useAuthStore } from "../../store";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const { register, handleSubmit } = useForm<ILoginCredentials>()
  const loginUser = useAuthStore(store => store.loginUser);

  const onSubmit = async (data: ILoginCredentials) => {
    try {
      setIsLoading(true)
      await loginUser(data)
      toast('Inicio de sesión exitoso');
      navigate('/')
      setIsLoading(false)
    } catch(err) {
      toast.error('Credenciales inválidas')
      setIsLoading(false)
    }
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="border shadow-md w-[33vw] h-[40vh] px-3 py-3 flex flex-col justify-center items-center">
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-3 w-full"
          >
          <h3 className="">
            Bienvenido
          </h3>

          <Input
            label="Usuario"
            placeholder="Ingrese su nombre de usuario"
            {
              ...register('username', {
                required: { value: true, message: 'El nombre de usuario es requerido' },
                minLength: { value: 4, message: 'El nombre de usuario debe tener al menos 4 caracteres' }
              })
            }
          />

          <Input
            label="Contraseña"
            placeholder="Ingrese su contraseña"
            {
              ...register('password', {
                required: { value: true, message: 'La contraseña es requerida' },
                minLength: { value: 8, message: 'La contraseña debe tener al menos 8 caracteres' }
              })
            }
            />

          <div className="flex justify-center">
            <Button
                type="submit"
                color="primary"
                size="lg"
                isLoading={isLoading}
              >
                Iniciar sesión
              </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
