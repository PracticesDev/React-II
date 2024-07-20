import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from '../ErrorPage';
import { CompleteListPage } from '../products';


export const router = createBrowserRouter([
  {
    path: "/",
    //element: <StoreLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <CompleteListPage/>
      }
    ]
  },
  {
    
  }
]);