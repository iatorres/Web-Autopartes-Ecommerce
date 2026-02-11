export default function Hero() {
  return (
    <section className="relative w-full">

      {/* Background image */}
      <div
        className="h-[500px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000')",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-end">

          {/* Promo Card */}
          <div className="bg-white rounded-xl p-8 shadow-2xl max-w-lg border-4 border-red-500">
            <h1 className="text-4xl font-extrabold leading-tight">
              PREPARÁ TU AUTO PARA LA RUTA
            </h1>

            <p className="mt-4 font-medium text-gray-700">
              Filtros y aceites para mejorar el rendimiento
            </p>

            <div className="mt-6 flex flex-col gap-3 text-green-600 font-bold">
              <span>8% OFF</span>
              <span>6 CUOTAS SIN INTERÉS</span>
              <span>ENVÍO GRATIS EN SELECCIONADOS</span>
            </div>

            <button className="mt-6 bg-blue-900 text-white px-6 py-3 rounded-md w-full hover:bg-blue-800 transition">
              Ver productos
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}