import { useQuery } from "@tanstack/react-query"
import { CompanyService } from "../../../services/company.service"
import { FC } from "react";

type TListCompaniesProps = {
  selectedCompanyId: string | null;
  setSelectedCompanyId: (companyId: string) => void;
}

export const ListCompanies: FC<TListCompaniesProps> = ({
  selectedCompanyId,
  setSelectedCompanyId
}) => {
  const { data, isLoading } = useQuery({
    queryKey: ['companies'],
    queryFn: CompanyService.getCompanies
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

 return (
  <ul className="p-2 flex flex-col gap-2">
    {
      data?.map((company, i) => (
        <li
          key={`${company.companyId}-${i}`}
          className={
            `border shadow p-2 hover:border-emerald-500 transition-all duration-100 ${
              selectedCompanyId === company.companyId
                ? 'border-emerald-500'
                : ''}`
          }
          onClick={() => setSelectedCompanyId(company.companyId)}
        >
          { company.name }
        </li>
      ))
    }
  </ul>
 )
}
