import { Button, Chip, Spinner, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip, useDisclosure } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { FC, useState } from "react";
import { CompanyService } from "../../services/company.service";
import { CompanyForm, TTypeForm } from "../components/company/company-form";

export const CompanyPage: FC = () => {

  const { data, isLoading } = useQuery({ queryKey: ['companies'], queryFn: CompanyService.getCompanies })
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [typeForm, setTypeForm] = useState<TTypeForm>('create' as TTypeForm);

  if (isLoading) {
    return <Spinner />
  }

  if (!data?.length) return <div>No hay empresas</div>

  const createCompany = () => {
    setTypeForm('create');
    onOpen();
  }

  // const updateCompany = () => {
  //   setTypeForm('update');
  //   onOpen();
  // }


  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold">
        Empresas
      </h1>

      <div className="flex flex-col gap-2">
        <div>
          <Button
            className="bg-emerald-500 text-white"
            startContent={<i className="fas fa-plus mr-2"></i>}
            onClick={createCompany}
          >
            Empresa
          </Button>
        </div>
        <Table isStriped aria-label="Companies data">
          <TableHeader>
            <TableColumn>Nombre</TableColumn>
            <TableColumn>RUC</TableColumn>
            <TableColumn>Estado</TableColumn>
            <TableColumn align="center">Acciones</TableColumn>
          </TableHeader>
          <TableBody>
            {
              data?.map((company, i) => (
                <TableRow key={`${company.companyId}-${i}`}>
                  <TableCell>
                    { company.name }
                  </TableCell>
                  <TableCell>
                    { company.ruc }
                  </TableCell>
                  <TableCell>
                    { company.isActive
                    ? <Chip color="success" variant="flat">Activo</Chip>
                    : <Chip color="danger" variant="flat">Inactivo</Chip>
                    }
                  </TableCell>
                  <TableCell>
                    <div className="relative flex justify-center items-center gap-2">
                      <Tooltip content="Details">
                        <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                          <i className="fas fa-eye"></i>
                        </span>
                      </Tooltip>
                      <Tooltip content="Edit user">
                        <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                          {/* <EditIcon /> */}
                          <i className="fas fa-edit"></i>
                        </span>
                      </Tooltip>
                      <Tooltip color="danger" content="Delete user">
                        <span className="text-lg text-danger cursor-pointer active:opacity-50">
                          {/* <DeleteIcon /> */}
                          <i className="fas fa-trash"></i>
                        </span>
                      </Tooltip>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </div>

      <CompanyForm
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        typeForm={typeForm}
      />.

    </div>
  )
}