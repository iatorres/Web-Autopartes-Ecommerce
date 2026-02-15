import { Link } from "react-router-dom";
import { MapPin, CreditCard, Truck } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
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
    </div>
  );
}
