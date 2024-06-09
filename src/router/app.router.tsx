import { createBrowserRouter } from 'react-router-dom';
import { WspCenter } from '../wsp-center';
import { AuthLayout, AppLayout } from '../layouts';
import { LoginPage } from '../features/auth/ui/pages/login.page';
import { CompanyPage } from '../features/root/ui/pages/company.page';
import { RootPage } from '../features/root/ui/pages/root.page';
import { OperatorPage } from '../features/operator/ui/pages/operator.page';
import { AdministratorPage } from '../features/administrator/ui/pages/administrator.page';
import { UserPage } from '../features/root/ui/pages/user.page';
import { PhoneNumberPage } from '../features/root/ui/pages/phone-numer.page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <WspCenter/>,
    children: [
      {
        path: '/',
        element: <AppLayout/>,
        children: [
          {
            path: '/root',
            element: <RootPage/>,
            children: [
              {
                path: 'company',
                element: <CompanyPage/>
              },
              {
                path: 'phone-number',
                element: <PhoneNumberPage/>
              },
              {
                path: 'user',
                element: <UserPage/>
              }
            ]
          },
          {
            path: 'administrator',
            element: <AdministratorPage/>
          },
          {
            path: 'operator',
            element: <OperatorPage/>
          },
          {
            path: '/*',
            element: <h1>Not Found</h1>
          }
        ]
      },
      {
        path: 'auth',
        element: <AuthLayout/>,
        children: [
          {
            path: 'login',
            element: <LoginPage/>
          }
        ]
      }
    ]
  }
])