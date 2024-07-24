import { useProducts } from "../hook/useProducts";

export const MensPage = () => {

  const { isLoading,  } = useProducts({
    filterKey: "men's clothing"
  });

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Productos para hombres</h1>

      {isLoading && <p>Cargando...</p> }



    </div>
  )
}