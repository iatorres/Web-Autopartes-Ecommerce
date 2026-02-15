
import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ id, name, price, image, category }) {
  // Aseguramos que el precio sea un número para evitar errores de renderizado
  const safePrice = Number(price) || 0;

  const formattedPrice = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  }).format(safePrice);

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-col group h-full">
      <div className="relative w-full h-48 overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center group-hover:opacity-90 transition-opacity"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">
          {category}
        </span>
        <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
          {name}
        </h3>
        <div className="mt-auto pt-2">
          <p className="text-xl font-bold text-gray-900 mb-3">{formattedPrice}</p>
          <Link
            to={`/producto/${id}`}
            className="block w-full text-center bg-gray-900 text-white text-sm font-medium py-2.5 px-4 rounded hover:bg-red-600 transition-colors"
          >
            Ver producto
          </Link>
        </div>
      </div>
    </div>
  );
}
