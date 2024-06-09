import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { PhoneNumberService } from "../../../services/phone-number.service";
import { Card, CardBody } from "@nextui-org/react";

type TListPhoneNumbersProps = {
  selectedPhoneNumberId: string;
}

export const ListPhoneNumbers: FC<TListPhoneNumbersProps> = ({
  selectedPhoneNumberId
}) => {
  const { data, isLoading } = useQuery({
    queryKey: ['phone-numbers-by-company', selectedPhoneNumberId],
    queryFn: () => PhoneNumberService.getPhoneNumbersByCompany(selectedPhoneNumberId as string)
  })

  if (isLoading) {
    return <div>Cargando...</div>
  }


  if (!data?.length) return <div>No hay números de teléfono</div>

  return(
  <div>
    {
      data?.map((phoneNumber, i) => (
        <Card
          key={`${phoneNumber.phoneNumberId}-${i}`}
          className="border shadow p-2 hover:border-emerald-500 transition-all duration-100"
        >
          <CardBody>
            { phoneNumber.phoneNumber } | { phoneNumber.instance }
          </CardBody>
        </Card>
      ))
    }
  </div>
  );
}