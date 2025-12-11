import { Star, Video, FileText, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 sm:pt-32 sm:pb-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Ceci Duca" className="h-10 w-auto" />
              <span className="badge-pink">Clase Especial</span>
            </div>
            
            <h1 className="heading-xl mb-4 text-balance">
              <span className="text-primary">Mesa Dulce Saludable</span>{" "}
              para Fiestas
            </h1>
            
            <p className="font-poppins font-semibold text-lg text-foreground mb-4">
              Sin azúcar, sin gluten, sin lácteos
            </p>
            
            <p className="body-text mb-8 max-w-xl">
              Estas fiestas, sorprendé con una mesa dulce deliciosa y 100% saludable. 
              Aprendé técnicas simples, recetas probadas y los secretos para lograr 
              postres increíbles sin azúcar, sin ultraprocesados y llenos de sabor.
            </p>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="font-poppins font-medium text-foreground">4.9/5</span>
              <span className="text-muted-foreground">• +500 alumnas satisfechas</span>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#inscripcion" className="btn-primary text-center">
                Quiero Inscribirme
              </a>
              <a href="#programa" className="btn-secondary text-center">
                Ver Qué Incluye
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Video className="w-5 h-5 text-primary" />
                </div>
                <p className="font-playfair font-bold text-2xl text-foreground">1</p>
                <p className="text-sm text-muted-foreground">Clase Grabada</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <p className="font-playfair font-bold text-2xl text-foreground">PDF</p>
                <p className="text-sm text-muted-foreground">Detallado</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <p className="font-playfair font-bold text-2xl text-foreground">∞</p>
                <p className="text-sm text-muted-foreground">Acceso Ilimitado</p>
              </div>
            </div>
          </div>

          {/* Video */}
          <div className="order-1 lg:order-2 animate-fade-in-right">
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/50 rounded-3xl -rotate-3"></div>
              <div className="relative rounded-2xl shadow-2xl overflow-hidden aspect-video">
                <iframe
                  src="https://player.vimeo.com/video/1145673461?h=3299ba6aa2&badge=0&autopause=0&player_id=0&app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  className="absolute top-0 left-0 w-full h-full"
                  title="Mesa Dulce Saludable para Fiestas"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
