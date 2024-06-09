import { useState } from "react"
import { ListCompanies } from "../components/phone-number/list-companies"
import { ListPhoneNumbers } from "../components/phone-number/list-phone-numbers";

export const PhoneNumberPage = () => {
  const [ selectedCompanyId, setSelectedCompanyId ] = useState<string | null>(null);
  return (
    <>
      <h3 className="text- xl font-semibold">
        Numeros de telefono
      </h3>

      <div className="grid grid-cols-12">
        <div
          className="col-span-3"
        >
          <ListCompanies
            selectedCompanyId={selectedCompanyId}
            setSelectedCompanyId={setSelectedCompanyId}
          />
        </div>
        <div
          className="col-span-9 p-2"
        >
          {
            selectedCompanyId
              ? <ListPhoneNumbers
                  selectedPhoneNumberId={selectedCompanyId}
                />
              : <div>Selecciona una compañia</div>
          }
        </div>
      </div>
    </>)
}