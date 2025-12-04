import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María García",
    role: "Mamá de 2",
    text: "Después de años con hinchazón y cansancio, este programa me cambió la vida. Las recetas son deliciosas y mi familia las ama. Bajé 5 kilos sin hacer dieta.",
    rating: 5,
  },
  {
    name: "Laura Fernández",
    role: "Ejecutiva",
    text: "Pensé que no tendría tiempo, pero las recetas son tan simples que ahora cocino más que antes. Mi digestión mejoró increíblemente y tengo más energía.",
    rating: 5,
  },
  {
    name: "Sofía Martínez",
    role: "Nutricionista",
    text: "Como profesional de la salud, recomiendo este programa a mis pacientes. Ceci explica todo con fundamento científico pero de forma comprensible.",
    rating: 5,
  },
  {
    name: "Ana López",
    role: "Emprendedora",
    text: "El ebook es increíble. Tengo recetas para todo el mes sin repetir. Mi piel se ve mejor, duermo más profundo y ya no tengo esos bajones de energía.",
    rating: 5,
  },
  {
    name: "Carla Ruiz",
    role: "Profesora",
    text: "Siempre tuve problemas digestivos y probé de todo. Este fue el único enfoque que realmente funcionó. Lo mejor es que disfruto lo que como.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      result.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return result;
  };

  return (
    <section id="testimonios" className="py-16 sm:py-24 bg-background">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="badge-pink mb-4">Testimonios</span>
          <h2 className="heading-lg mb-4">
            Lo que dicen nuestras alumnas
          </h2>
          <p className="body-text">
            Más de 500 mujeres ya transformaron su relación con la comida y su salud.
          </p>
        </div>

        {/* Mobile: Single testimonial */}
        <div className="lg:hidden">
          <div className="bg-card border border-border rounded-2xl p-6">
            <Quote className="w-10 h-10 text-secondary mb-4" />
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="body-text mb-6 italic">"{testimonials[currentIndex].text}"</p>
            <div>
              <p className="font-poppins font-semibold text-foreground">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
            </div>
          </div>
        </div>

        {/* Desktop: 3 testimonials */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${currentIndex}-${index}`}
              className="bg-card border border-border rounded-2xl p-6 card-hover"
            >
              <Quote className="w-10 h-10 text-secondary mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="body-text mb-6 italic line-clamp-4">"{testimonial.text}"</p>
              <div>
                <p className="font-poppins font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-border"
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
