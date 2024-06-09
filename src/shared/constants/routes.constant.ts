interface IRoute {
 path: string;
 label: string;
}

export const root: IRoute[] = [
 {
   path: 'root/company',
   label: 'Empresas'
 },
 {
   path: 'root/phone-number',
   label: 'Números de teléfono'
 },
 {
   path: 'root/user',
   label: 'Usuarios'
 }
];



// root
// - company
// - phone number
// - user


// administrator
// - phone number - login qr
// - user
// - bandeja de entrada - chats

// operator
// - bandeja de entrada - chats
// - user

