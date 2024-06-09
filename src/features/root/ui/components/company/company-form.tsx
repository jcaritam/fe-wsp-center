import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react"
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { ICreateCompany } from "../../../interfaces/company.interface";
import { CompanyService } from "../../../services/company.service";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

export type TTypeForm = 'create' | 'update';

type ICompanyFormProps = {
  isOpen: boolean;
  onOpenChange: () => void;
  typeForm: TTypeForm;
}


export const CompanyForm: FC<ICompanyFormProps> = ({
  isOpen,
  onOpenChange,
  typeForm = 'create'
}) => {
  const { register, handleSubmit } = useForm<ICreateCompany>();
  const [ isLoading, setIsLoading ]= useState<boolean>(false);
  const queryClient                = useQueryClient();
  

  const onSubmit = async (data: ICreateCompany) => {
    console.log(data);
    if (typeForm === 'update') return;
    await addCompany(data);
    onOpenChange();
  }

  const addCompany = async (createCompany: ICreateCompany) => {
    try {
      setIsLoading(true);
      const company = await CompanyService.addCompany(createCompany);
      console.log(company);
      setIsLoading(false);
      queryClient.invalidateQueries({ queryKey: ['companies']});
      toast.success('Empresa creada exitosamente');
    } catch (error) {
      console.error(error);
      toast.error('Error al crear la empresa');
    }
  }


  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {
          (onClose) => (
            <form
              onSubmit={handleSubmit(onSubmit)}
            >
              <ModalHeader>
                {
                  typeForm === 'update' && 'Actualizar empresa'
                }
                {
                  typeForm === 'create' && 'Crear empresa'
                }
              </ModalHeader>
              <ModalBody>
                <Input
                  label="Nombre"
                  placeholder="Ingrese el nombre de la empresa"
                  variant="underlined"
                  {
                  ...register('name', {
                    required: { value: true, message: 'Campo requerido ' }
                  })
                  }
                />

                <Input
                  label="Ruc"
                  placeholder="Ingrese el ruc de la empresa"
                  variant="underlined"
                  {
                  ...register('ruc', {
                    required: { value: true, message: 'Campo requerido ' }
                  })
                  }
                />

              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={onClose}>
                  Cancelar
                </Button>
                <Button
                  color="success"
                  type="submit"
                  isLoading={isLoading}
                >
                  Guardar
                </Button>
              </ModalFooter>
            </form>
          )
        }
      </ModalContent>
    </Modal>
  )
}
