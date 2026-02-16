import { useParams, Link, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { ShoppingCart, Heart, Share2, ArrowLeft, CheckCircle, Truck, Shield } from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center bg-white rounded-xl shadow-lg p-12">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Producto no encontrado
          </h2>
          <p className="text-gray-500 mb-6">
            El producto que buscas no existe o fue removido del catálogo.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
          >
            <ArrowLeft size={20} />
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  // Productos relacionados de la misma categoría
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

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
            <Link 
              to={`/categoria/${encodeURIComponent(product.category)}`}
              className="hover:text-blue-700 transition-colors"
            >
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-blue-700 transition-colors mb-6"
        >
          <ArrowLeft size={20} />
          Volver
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-xl shadow-lg p-8">
          {/* Imagen del producto */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Información del producto */}
          <div className="flex flex-col">
            <div className="flex-grow">
              {/* Categoría y marca */}
              <div className="flex items-center gap-3 mb-4">
                <Link
                  to={`/categoria/${encodeURIComponent(product.category)}`}
                  className="text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors uppercase tracking-wide"
                >
                  {product.category}
                </Link>
              </div>

              {/* Nombre del producto */}
              <h1 className="text-3xl font-bold text-gray-900 mb-3">
                {product.name}
              </h1>

              {/* Marca */}
              <p className="text-lg text-gray-600 mb-6">
                Marca: <span className="font-semibold text-gray-900">{product.brand}</span>
              </p>

              {/* Precio */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl font-bold text-blue-900">
                    ${product.price.toLocaleString('es-AR')}
                  </span>
                </div>
                <p className="text-sm text-orange-600 font-medium">
                  ⚠️ Precio sujeto a confirmación de disponibilidad
                </p>
              </div>

              {/* Características */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 text-sm">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">Producto original y certificado</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <Truck className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">Envío disponible a todo el país</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <Shield className="text-purple-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">Garantía del fabricante</span>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="space-y-3">
                <button className="w-full bg-blue-900 text-white py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors flex items-center justify-center gap-2">
                  <ShoppingCart size={20} />
                  Consultar disponibilidad
                </button>
                
                <div className="grid grid-cols-2 gap-3">
                  <button className="border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    <Heart size={18} />
                    Favoritos
                  </button>
                  <button className="border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    <Share2 size={18} />
                    Compartir
                  </button>
                </div>
              </div>
            </div>

            {/* Información adicional */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Información del producto</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {product.name} de la marca {product.brand}. Producto de alta calidad 
                ideal para tu vehículo. Consulta disponibilidad y precios actualizados 
                con nuestro equipo de ventas.
              </p>
            </div>
          </div>
        </div>

        {/* Productos relacionados */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Productos relacionados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/producto/${relatedProduct.id}`}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all group"
                >
                  <div className="aspect-square bg-gray-100">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-lg font-bold text-blue-900">
                      ${relatedProduct.price.toLocaleString('es-AR')}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
