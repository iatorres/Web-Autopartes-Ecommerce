import VehicleSearch from "../components/VehicleSearch";
import ProductCard from "../components/ProductCard";
import { products } from "../data/mockProducts";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <VehicleSearch />

      <h2 className="mt-10 mb-4 font-semibold text-lg">
        Repuestos disponibles
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
