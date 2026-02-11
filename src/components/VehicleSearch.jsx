export default function VehicleSearch() {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="font-semibold mb-4">
        Buscar repuesto por vehículo
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input className="input" placeholder="Marca" />
        <input className="input" placeholder="Modelo" />
        <input className="input" placeholder="Año" />
        <input className="input" placeholder="Motor" />
      </div>

      <button className="mt-4 w-full bg-black text-white py-2 rounded-lg">
        Buscar repuestos
      </button>
    </div>
  );
}
