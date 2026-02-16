import { useState } from "react";
import { ShoppingCart, User, Search, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const CATEGORIES = [
  "REPUESTOS AUTOS Y CAMIONETAS",
  "REPUESTOS DE LÍNEA PESADA",
  "REPUESTOS MOTOS Y CUATRICICLOS",
  "LIMPIEZA DE VEHÍCULOS",
  "CÁMARAS Y ACCESORIOS",
  "SALUD Y EQUIPAMIENTO MÉDICO",
  "AGRO",
  "ELECTRODOMÉSTICOS Y AIRES AC.",
  "HERRAMIENTAS",
  "HOGAR, MUEBLES Y JARDÍN",
  "DEPORTES Y FITNESS",
  "DESCUENTOS CYBER",
  "ACCESORIOS PARA VEHÍCULOS",
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full">

      {/* Top Promo Bar */}
      <div className="bg-gray-100 text-center text-xs py-2 font-medium">
         🔥Esta página esta en desarrollo 🔨🔨
      </div>

      {/* Main Navbar */}
      <div className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-wide">
            Ratoncito <span className="font-light">Autopartes</span>
          </Link>

          {/* Search */}
          <div className="flex-1 max-w-2xl relative">
            <input
              type="text"
              placeholder="¿Qué estás buscando?"
              className="w-full py-2 px-4 rounded-md text-black"
            />
            <Search className="absolute right-3 top-2.5 text-gray-500" size={18} />
          </div>

          {/* Account & Cart */}
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2 cursor-pointer">
              <User size={20} />
              <span>Iniciar sesión</span>
            </div>

            <div className="flex items-center gap-2 cursor-pointer">
              <ShoppingCart size={20} />
              <span>0</span>
            </div>
          </div>
        </div>

        {/* Categories Menu */}
        <div className="bg-blue-800 text-sm">
          <div className="max-w-7xl mx-auto px-6 py-3">
            <div className="relative inline-block">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 font-semibold cursor-pointer hover:text-blue-200 transition-colors"
              >
                <Menu size={18} />
                Categorías
              </button>

              {isOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl z-50 py-2 text-gray-800 border border-gray-100">
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat}
                      to={`/categoria/${encodeURIComponent(cat)}`}
                      className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors border-b border-gray-50 last:border-0"
                      onClick={() => setIsOpen(false)}
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}