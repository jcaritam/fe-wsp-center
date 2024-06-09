import { Spinner } from "@nextui-org/react"

export const SpinnerLoading = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
     <Spinner label="Cargando..." color="success" labelColor="success" />
    </div>
  )
}
