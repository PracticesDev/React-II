//import { ProductList, useProducts } from ".."

import { useProducts } from "../hook/useProducts";



export const CompleteListPage = () => {

  const { isLoading } = useProducts({});
  

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Todos los productos</h1>

      { isLoading && <p>Cargando...</p> }



    </div>
      //<ProductList products={ products }  />
  )
}