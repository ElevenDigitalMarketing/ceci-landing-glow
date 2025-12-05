import { Star, Users, Clock, BookOpen } from "lucide-react";
import ceciHero from "@/assets/ceci-hero.jpg";
import logo from "@/assets/logo.png";
const Hero = () => {
  return <section className="pt-24 pb-16 sm:pt-32 sm:pb-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Ceci Duca" className="h-10 w-auto" />
              <span className="badge-pink">12 Talleres + Ebook</span>
            </div>
            
            <h1 className="heading-xl mb-6 text-balance">
              Transforma tu salud con el{" "}
              <span className="text-primary">Ciclo de Cocina Antiinflamatoria</span>
            </h1>
            
            <p className="body-text mb-8 max-w-xl">
              Descubre cómo preparar recetas deliciosas que reducen la inflamación, 
              mejoran tu digestión y te llenan de energía. Sin complicaciones, 
              con ingredientes accesibles y resultados reales.
            </p>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
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
                Ver Programa Completo
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <p className="font-playfair font-bold text-2xl text-foreground">12</p>
                <p className="text-sm text-muted-foreground">Talleres</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <p className="font-playfair font-bold text-2xl text-foreground">+20h</p>
                <p className="text-sm text-muted-foreground">Contenido</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <p className="font-playfair font-bold text-2xl text-foreground">+500</p>
                <p className="text-sm text-muted-foreground">Alumnas</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 animate-fade-in-right">
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/50 rounded-3xl -rotate-3"></div>
              <img src={ceciHero} alt="Ceci Duca preparando recetas antiinflamatorias" className="relative rounded-2xl shadow-2xl w-full aspect-[4/5] object-cover" loading="eager" />
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;