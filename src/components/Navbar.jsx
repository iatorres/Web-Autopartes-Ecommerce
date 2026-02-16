import { useState, useEffect, useRef } from "react";
import { ShoppingCart, User, Search, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { products } from "../data/products";

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
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState({ products: [], categories: [] });
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // Cerrar resultados cuando se hace clic fuera
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Buscar productos y categorías
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const query = searchQuery.toLowerCase();
      
      // Buscar productos
      const matchingProducts = products.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query)
      ).slice(0, 5); // Limitar a 5 resultados

      // Buscar categorías
      const matchingCategories = CATEGORIES.filter(category =>
        category.toLowerCase().includes(query)
      );

      setSearchResults({
        products: matchingProducts,
        categories: matchingCategories
      });
      setShowResults(true);
    } else {
      setShowResults(false);
      setSearchResults({ products: [], categories: [] });
    }
  }, [searchQuery]);

  const handleProductClick = (productId) => {
    navigate(`/producto/${productId}`);
    setSearchQuery("");
    setShowResults(false);
  };

  const handleCategoryClick = (category) => {
    navigate(`/categoria/${encodeURIComponent(category)}`);
    setSearchQuery("");
    setShowResults(false);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setShowResults(false);
  };

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
          <Link to="/" className="text-2xl font-bold tracking-wide hover:text-blue-200 transition-colors">
            Ratoncito <span className="font-light">Autopartes</span>
          </Link>

          {/* Search */}
          <div className="flex-1 max-w-2xl relative" ref={searchRef}>
            <input
              type="text"
              placeholder="Buscar productos o categorías..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2 px-4 pr-20 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div className="absolute right-3 top-2.5 flex items-center gap-2">
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={18} />
                </button>
              )}
              <Search className="text-gray-500" size={18} />
            </div>

            {/* Search Results Dropdown */}
            {showResults && (searchResults.products.length > 0 || searchResults.categories.length > 0) && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-2xl z-50 max-h-96 overflow-y-auto border border-gray-200">
                
                {/* Categories Results */}
                {searchResults.categories.length > 0 && (
                  <div className="border-b border-gray-100">
                    <div className="px-4 py-2 bg-gray-50 text-xs font-semibold text-gray-600 uppercase">
                      Categorías
                    </div>
                    {searchResults.categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => handleCategoryClick(category)}
                        className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors border-b border-gray-50 last:border-0"
                      >
                        <div className="text-sm font-medium text-gray-800">{category}</div>
                      </button>
                    ))}
                  </div>
                )}

                {/* Products Results */}
                {searchResults.products.length > 0 && (
                  <div>
                    <div className="px-4 py-2 bg-gray-50 text-xs font-semibold text-gray-600 uppercase">
                      Productos
                    </div>
                    {searchResults.products.map((product) => (
                      <button
                        key={product.id}
                        onClick={() => handleProductClick(product.id)}
                        className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors border-b border-gray-50 last:border-0 flex items-center gap-3"
                      >
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-800">{product.name}</div>
                          <div className="text-xs text-gray-500">{product.brand}</div>
                        </div>
                        <div className="text-sm font-bold text-blue-700">
                          ${product.price.toLocaleString()}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* No Results */}
            {showResults && searchQuery.trim().length > 0 && searchResults.products.length === 0 && searchResults.categories.length === 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-2xl z-50 border border-gray-200">
                <div className="px-4 py-6 text-center text-gray-500">
                  <Search className="mx-auto mb-2 text-gray-400" size={32} />
                  <p className="text-sm">No se encontraron resultados para "{searchQuery}"</p>
                </div>
              </div>
            )}
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