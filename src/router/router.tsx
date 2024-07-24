import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from '../ErrorPage';
import { StoreLayout } from '../products/layout/StoreLayout';
import { CompleteListPage,MensPage,NewProduct,WomensPage } from '../products/pages';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <StoreLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <CompleteListPage />
      }, 
      {
        path: "Men",
        element: <MensPage />
      },
      {
        path: "Women",
        element: <WomensPage/>
      },
      {
        path: "new",
        element: <NewProduct/>
      }
    ]
  },
  {

  }
]);