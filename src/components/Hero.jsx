import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000",
    title: "PREPARÁ TU AUTO PARA LA RUTA",
    subtitle: "Filtros y aceites para mejorar el rendimiento",
    offers: ["8% OFF", "6 CUOTAS SIN INTERÉS", "ENVÍO GRATIS EN SELECCIONADOS"],
    buttonText: "Ver productos",
    align: "justify-end",
  },
  {
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000",
    title: "TODO PARA TU MOTOR",
    subtitle: "La mejor calidad en repuestos originales",
    offers: ["10% OFF EN EFECTIVO", "ENVÍO RÁPIDO"],
    buttonText: "Ver catálogo",
    align: "justify-start",
  },
  {
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000",
    title: "ACCESORIOS Y MÁS",
    subtitle: "Equipá tu vehículo con lo último",
    offers: ["HASTA 12 CUOTAS FIJAS", "GARANTÍA ASEGURADA"],
    buttonText: "Comprar ahora",
    align: "justify-center",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurrent((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    const slideInterval = setInterval(next, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="hero-section group">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${
            index === current ? "hero-slide-active" : "hero-slide-inactive"
          }`}
          style={{
            backgroundImage: `url('${slide.image}')`,
          }}
        />
      ))}

      {/* Controls */}
      <button
        onClick={prev}
        className="hero-control-prev"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={next}
        className="hero-control-next"
      >
        <ChevronRight size={32} />
      </button>

      {/* Indicators */}
      <div className="hero-indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`hero-indicator ${
              current === i ? "hero-indicator-active" : "hero-indicator-inactive"
            }`}
          />
        ))}
      </div>
    </section>
  );
}