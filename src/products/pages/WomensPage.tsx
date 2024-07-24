import { useProducts } from "../hook/useProducts";

export const WomensPage = () => {

  const { isLoading } = useProducts({
    filterKey: "women's clothing"
  });

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Productos para mujeres</h1>

      {isLoading && <p>Cargando...</p> }



    </div>
  )
}