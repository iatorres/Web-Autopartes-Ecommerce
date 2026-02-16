import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { ArrowLeft, SlidersHorizontal } from "lucide-react";

export default function CategoryPage() {
  const { categoryName } = useParams();
  const [sortBy, setSortBy] = useState("default");
  
  // Decodificamos la categoría por si viene con caracteres especiales de la URL
  let decodedCategory = "";
  try {
    decodedCategory = decodeURIComponent(categoryName || "");
  } catch (error) {
    decodedCategory = categoryName || "";
  }

  // Verificamos que products sea un array válido antes de filtrar para evitar crashes
  const safeProducts = Array.isArray(products) ? products : [];

  let filteredProducts = safeProducts.filter(
    (product) => product?.category === decodedCategory
  );

  // Aplicar ordenamiento
  if (sortBy === "price-asc") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === "name") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
  }

  // Obtener marcas únicas para la categoría
  const brands = [...new Set(filteredProducts.map(p => p.brand))];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-700 transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Categorías</span>
            <span>/</span>
            <span className="text-gray-900 font-medium">{decodedCategory}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Botón volver */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-700 transition-colors mb-6"
        >
          <ArrowLeft size={20} />
          Volver al inicio
        </Link>

        {/* Header de la categoría */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 uppercase tracking-tight mb-2">
                {decodedCategory}
              </h1>
              <p className="text-gray-600">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'producto encontrado' : 'productos encontrados'}
              </p>
            </div>

            {/* Filtros y ordenamiento */}
            {filteredProducts.length > 0 && (
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal size={18} className="text-gray-500" />
                  <span className="text-sm font-medium text-gray-700">Ordenar por:</span>
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="default">Más relevantes</option>
                  <option value="price-asc">Menor precio</option>
                  <option value="price-desc">Mayor precio</option>
                  <option value="name">Nombre A-Z</option>
                </select>
              </div>
            )}
          </div>

          {/* Marcas disponibles */}
          {brands.length > 1 && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm font-medium text-gray-700 mb-2">Marcas disponibles:</p>
              <div className="flex flex-wrap gap-2">
                {brands.map((brand) => (
                  <span
                    key={brand}
                    className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Grid de productos */}
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
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              No encontramos productos en esta categoría
            </h2>
            <p className="text-gray-600 mb-6">
              Intenta buscar en otra categoría o revisa nuestro catálogo completo.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
            >
              Ver todos los productos
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
