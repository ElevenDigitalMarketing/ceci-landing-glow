import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonialImages = [
  "https://d1yei2z3i6k35z.cloudfront.net/15460958/693aebc331fc4_Archivo_001.png",
  "https://d1yei2z3i6k35z.cloudfront.net/15460958/693aebcf9863d_Archivo_002.png",
  "https://d1yei2z3i6k35z.cloudfront.net/15460958/693aebda2f604_Archivo_003.png",
  "https://d1yei2z3i6k35z.cloudfront.net/15460958/693aebea6431b_Archivo_004.png",
  "https://d1yei2z3i6k35z.cloudfront.net/15460958/693aebf959a48_Archivo_006.png",
  "https://d1yei2z3i6k35z.cloudfront.net/15460958/693aec03471f1_Archivo_009.jpg",
  "https://d1yei2z3i6k35z.cloudfront.net/15460958/693aec12b240a_Archivo_011.png",
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialImages.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialImages.length) % testimonialImages.length);
  };

  const getVisibleImages = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      result.push(testimonialImages[(currentIndex + i) % testimonialImages.length]);
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
            Mirá lo que opinan quienes ya probaron las recetas.
          </p>
        </div>

        {/* Mobile: Single image */}
        <div className="lg:hidden">
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <img
              src={testimonialImages[currentIndex]}
              alt={`Testimonio ${currentIndex + 1}`}
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>

        {/* Desktop: 3 images */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {getVisibleImages().map((image, index) => (
            <div
              key={`${image}-${currentIndex}-${index}`}
              className="bg-card border border-border rounded-2xl overflow-hidden card-hover"
            >
              <img
                src={image}
                alt={`Testimonio ${(currentIndex + index) % testimonialImages.length + 1}`}
                className="w-full h-auto object-contain"
                loading="lazy"
              />
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
            {testimonialImages.map((_, index) => (
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
