import { Link } from "react-router-dom";
import { MapPin, CreditCard, Truck, Wrench, Car, Bike, Zap } from "lucide-react";
import Hero from "../components/Hero";

const FEATURED_CATEGORIES = [
  { name: "REPUESTOS AUTOS Y CAMIONETAS", icon: Car, color: "bg-blue-100 text-blue-600" },
  { name: "REPUESTOS MOTOS Y CUATRICICLOS", icon: Bike, color: "bg-orange-100 text-orange-600" },
  { name: "HERRAMIENTAS", icon: Wrench, color: "bg-gray-100 text-gray-700" },
  { name: "ACCESORIOS PARA VEHÍCULOS", icon: Zap, color: "bg-yellow-100 text-yellow-700" },
];

export default function Home() {
  return (
    <>
      <Hero />
      <div className="max-w-7xl mx-auto px-6 py-8">
      
      {/* Info Banners */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          to="/qa"
          className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition flex items-center text-left group gap-3"
        >
          <MapPin className="w-6 h-6 text-red-500 shrink-0 group-hover:scale-110 transition-transform" />
          <div>
            <h3 className="font-bold text-sm text-gray-900">
              Retira gratis en nuestra sucursal
            </h3>
            <p className="text-xs text-gray-600 mt-1">
              Acercate a nuestro local y retirá tu pedido sin costo de envío.
            </p>
          </div>
        </Link>

        <Link
          to="/qa"
          className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition flex items-center text-left group gap-3"
        >
          <CreditCard className="w-6 h-6 text-blue-600 shrink-0 group-hover:scale-110 transition-transform" />
          <div>
            <h3 className="font-bold text-sm text-gray-900">
              Elegí tu medio de pago favorito
            </h3>
            <p className="text-xs text-gray-600 mt-1">
              Aceptamos todas las tarjetas de crédito, débito y pagos en efectivo.
            </p>
          </div>
        </Link>

        <Link
          to="/qa"
          className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition flex items-center text-left group gap-3"
        >
          <Truck className="w-6 h-6 text-green-600 shrink-0 group-hover:scale-110 transition-transform" />
          <div>
            <h3 className="font-bold text-sm text-gray-900">
              Recibí tu producto en menos de 24hs
            </h3>
            <p className="text-xs text-gray-600 mt-1">
              Hacemos envíos rápidos para que tengas tus repuestos lo antes posible.
            </p>
          </div>
        </Link>
      </div>

      {/* Featured Categories Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Categorías Destacadas</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {FEATURED_CATEGORIES.map((cat) => (
            <Link
              key={cat.name}
              to={`/categoria/${encodeURIComponent(cat.name)}`}
              className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`p-4 rounded-full mb-4 ${cat.color} group-hover:scale-110 transition-transform`}>
                <cat.icon size={32} />
              </div>
              <h3 className="font-semibold text-gray-900 text-center text-sm">
                {cat.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
