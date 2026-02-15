import { useParams } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <div className="bg-white p-6 rounded-xl shadow">
        <h1 className="font-bold text-xl">{product.name}</h1>
        <p className="text-gray-500">{product.brand}</p>

        <p className="mt-4 font-bold text-lg">
          ${product.price.toLocaleString()}
        </p>

        <p className="text-sm text-orange-600 mt-2">
          Precio sujeto a confirmación
        </p>

        <button className="mt-6 w-full bg-black text-white py-3 rounded-lg">
          Consultar disponibilidad
        </button>
      </div>
    </div>
  );
}
