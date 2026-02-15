// c:\Users\luiss\OneDrive\Documents\GitHub\Web-Autopartes-Ecommerce\src\pages\CategoryPage.jsx

import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function CategoryPage() {
  const { categoryName } = useParams();
  // Decodificamos la categoría por si viene con caracteres especiales de la URL
  let decodedCategory = "";
  try {
    decodedCategory = decodeURIComponent(categoryName || "");
  } catch (error) {
    decodedCategory = categoryName || "";
  }

  // Verificamos que products sea un array válido antes de filtrar para evitar crashes
  const safeProducts = Array.isArray(products) ? products : [];

  const filteredProducts = safeProducts.filter(
    (product) => product?.category === decodedCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-8 border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-bold text-gray-900 uppercase tracking-tight">
          {decodedCategory}
        </h1>
        <p className="text-gray-500 mt-2 text-sm">
          {filteredProducts.length} productos encontrados
        </p>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="h-full">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            No encontramos productos en esta categoría
          </h2>
          <p className="text-gray-500">
            Intenta buscar en otra categoría o revisa nuestro catálogo completo.
          </p>
        </div>
      )}
    </div>
  );
}
