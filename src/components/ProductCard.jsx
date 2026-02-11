import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow flex flex-col">
      <h3 className="font-semibold">{product.name}</h3>
      <span className="text-sm text-gray-500">{product.brand}</span>

      <p className="mt-2 font-bold">
        ${product.price.toLocaleString()}
      </p>

      <span className="text-xs text-orange-600 mt-1">
        {product.note}
      </span>

      <Link
        to={`/producto/${product.id}`}
        className="mt-auto bg-gray-900 text-white text-center py-2 rounded-lg mt-4"
      >
        Consultar
      </Link>
    </div>
  );
}
