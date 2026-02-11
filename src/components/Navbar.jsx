import { ShoppingCart, User, Search, Menu } from "lucide-react";

export default function Navbar() {
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
          <div className="text-2xl font-bold tracking-wide">
            Ratoncito <span className="font-light">Autopartes</span>
          </div>

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
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-6 overflow-x-auto">

            <div className="flex items-center gap-2 font-semibold cursor-pointer">
              <Menu size={18} />
              Categorías
            </div>

            <span className="cursor-pointer hover:text-gray-300">Motor</span>
            <span className="cursor-pointer hover:text-gray-300">Suspensión</span>
            <span className="cursor-pointer hover:text-gray-300">Iluminación</span>
            <span className="cursor-pointer hover:text-gray-300">Inyección</span>
            <span className="cursor-pointer hover:text-gray-300">Transmisión</span>
            <span className="cursor-pointer hover:text-gray-300">Encendido</span>
            <span className="cursor-pointer hover:text-gray-300">Accesorios</span>
            <span className="cursor-pointer hover:text-gray-300">Más</span>

          </div>
        </div>
      </div>
    </header>
  );
}